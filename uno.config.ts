import { presetUni } from '@uni-helper/unocss-preset-uni'

import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    /**
     * unocss uni-app 小程序预设
     * @see https://github.com/uni-helper/unocss-preset-uni
     */
    presetUni({
      /**
       * 处理组件属性名与 unocss attributify 模式冲突问题
       * https://unocss-cn.pages.dev/presets/attributify#属性名称冲突
       */
      attributify: {
        prefix: 'un-',
        prefixedOnly: true,
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    // https://unocss-cn.pages.dev/transformers/directives#%E5%AE%89%E8%A3%85
    transformerDirectives(), // UnoCSS 的指令转换器，用于处理 @apply、@screen 和 theme() 指令
    // https://unocss-cn.pages.dev/transformers/variant-group#%E5%AE%89%E8%A3%85
    transformerVariantGroup(), // 启用 UnoCSS 的 Windi CSS 变体组功能，即：() 分组功能
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
  ],
})
