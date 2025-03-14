import { resolve } from 'node:path'

import uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { UniUIResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'
import VueDevTools from 'vite-plugin-vue-devtools'
import { getRootPath, getSrcPath } from './build/utils'

export default defineConfig(async () => {
  const srcPath = getSrcPath()
  const rootPath = getRootPath()

  /**
   * 为兼容 @dcloudio/vite-plugin-uni 采用 CJS ，而 UnoCSS 只支持 ESM
   * @see https://github.com/dcloudio/uni-app/issues/4815
   */
  const UnoCSS = (await import('unocss/vite')).default

  return {
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    plugins: [
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
        imports: ['vue', 'pinia', 'uni-app'],
        dirs: [resolve(getSrcPath(), 'composables')],
        vueTemplate: true,
        dts: resolve(getRootPath(), 'types/auto-import.d.ts'),
      }),

      /**
       * @uni-helper/vite-plugin-uni-components 按需引入组件
       * 从 unplugin-vue-components 派生并修改以适应UniApp。
       * 支持的 UI 库：Ano UI、uni-ui、wot-design-uni、uv-ui
       * 注意：需注册至 uni 之前，否则不会生效
       * @see https://github.com/uni-helper/vite-plugin-uni-components
       */
      Components({
        resolvers: [UniUIResolver(), IconsResolver()],
        extensions: ['vue'],
        deep: true,
        directoryAsNamespace: true,
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
