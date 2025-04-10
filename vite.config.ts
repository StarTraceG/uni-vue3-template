import path, { resolve } from 'node:path'
import process from 'node:process'
import uni from '@dcloudio/vite-plugin-uni'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import AutoImport from 'unplugin-auto-import/vite'
import icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'
import VueDevTools from 'vite-plugin-vue-devtools'
import { convertEnv, getRootPath, getSrcPath } from './build/utils'

export default defineConfig(async ({ command, mode }) => {
  // mode: 区分生产环境还是开发环境
  console.log('command, mode -> ', command, mode)
  // pnpm dev:h5 时得到 => serve development
  // pnpm build:h5 时得到 => build production
  // pnpm dev:mp-weixin 时得到 => build development (注意区别，command为build)
  // pnpm build:mp-weixin 时得到 => build production
  // pnpm dev:app 时得到 => build development (注意区别，command为build)
  // pnpm build:app 时得到 => build production
  // dev 和 build 命令可以分别使用 .env.development 和 .env.production 的环境变量

  const { UNI_PLATFORM } = process.env
  console.log('UNI_PLATFORM -> ', UNI_PLATFORM) // 得到 mp-weixin, h5, app 等

  const viteEnv = convertEnv(loadEnv(mode, path.resolve(process.cwd())))
  const {
    VITE_PORT,
    VITE_SERVER_BASEURL,
    VITE_USE_PROXY,
    VITE_PROXY_PREFIX,
  } = viteEnv
  console.log('环境变量 viteEnv -> ', viteEnv)

  const srcPath = getSrcPath()
  const rootPath = getRootPath()

  /**
   * 为兼容 @dcloudio/vite-plugin-uni 采用 CJS ，而 UnoCSS 只支持 ESM
   * @see https://github.com/dcloudio/uni-app/issues/4815
   */
  const UnoCSS = (await import('unocss/vite')).default

  return {
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: VITE_PORT,
      // 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)
      proxy: VITE_USE_PROXY
        ? {
            [VITE_PROXY_PREFIX]: {
              target: VITE_SERVER_BASEURL,
              changeOrigin: true,
              rewrite: (path: string) => path.replace(new RegExp(`^${VITE_PROXY_PREFIX}`), ''),
            },
          }
        : undefined,
    },
    define: {
      __UNI_PLATFORM__: JSON.stringify(UNI_PLATFORM),
      __VITE_APP_PROXY__: VITE_USE_PROXY,
    },
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    plugins: [
      /**
       * uni-pages
       * @see https://github.com/uni-helper/vite-plugin-uni-pages
       */
      UniPages({
        dts: 'types/uni-pages.d.ts', // 为页面路径生成 TypeScript 声明
        homePage: 'pages/index/index', // 默认路由入口
        subPackages: ['src/uni-ui', 'src/uv-ui', 'src/wot-design-uni'], // subPackages 扫描的目录，是个数组，可以配置多个，分包的目录不能为 src/pages 里面的子目录
        exclude: ['**/components/**/**.*'], // 排除的页面，相对于 dir 和 subPackages
        routeBlockLang: 'json5', // 自定义块语言，虽然设了默认值，但是vue文件还是要加上 lang="json5", 这样才能很好地格式化
      }),

      /**
       * uni-layouts
       * @see https://github.com/uni-helper/vite-plugin-uni-layouts
       */
      UniLayouts(),

      /**
       * unocss
       * @see https://github.com/antfu/unocss
       * see unocss.config.ts for config
       */
      UnoCSS(),

      /**
       * unplugin-auto-import 按需 import
       * @see https://github.com/antfu/unplugin-auto-import
       */
      AutoImport({
        imports: ['vue', 'pinia', 'uni-app', '@vueuse/core'],
        dts: resolve(getRootPath(), 'types/auto-imports.d.ts'),
        dirs: [
          resolve(getSrcPath(), 'composables'),
          resolve(getSrcPath(), 'store'),
          resolve(getSrcPath(), 'utils'),
        ],
        vueTemplate: true,
      }),

      /**
       * unplugin-vue-components 按需引入组件
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/antfu/vite-plugin-components
       */
      Components({
        dts: resolve(getRootPath(), 'types/components.d.ts'),
      }),

      icons({
        compiler: 'vue3',
      }),

      /**
       * vite-plugin-vue-devtools 增强 Vue 开发者体验
       * @see https://github.com/webfansplz/vite-plugin-vue-devtools
       */
      VueDevTools(),

      /**
       * 为属性、指令提供平台修饰符并按需编译
       * @see https://github.com/uni-helper/vite-plugin-uni-platform-modifier
       */
      UniPlatformModifier(),

      uni(),

      /**
       * 解决 UniApp 依赖版本与 Vue 主版本库差异导致其它库不可使用问题
       * 暂时修复 uni 底层依赖不支持 VueUse v10 以上问题
       * @see https://github.com/Ares-Chang/vite-plugin-uni-polyfill
       * @see https://github.com/dcloudio/uni-app/issues/4604
       */
      UniPolyfill(),
    ],
  }
})
