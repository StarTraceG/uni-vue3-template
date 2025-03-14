import { presetUni } from '@uni-helper/unocss-preset-uni'

import {
  defineConfig,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
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
})
