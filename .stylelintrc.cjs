module.exports = {
  root: true,
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    // 允许 global 、export 、deep等伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'deep',
          'slotted',
          'global',
          'export',
        ],
      },
    ],
    // 处理小程序page标签不认识的问题
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'page',
          'rich-text',
          'scroll-view',
          'cover-image',
        ],
      },
    ],
    // 处理 rpx、upx 不认识的问题
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx', 'upx'],
      },
    ],
    'no-descending-specificity': null,
    'no-empty-source': null,
    'comment-no-empty': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'keyframes-name-pattern': '^[a-z]+([A-Z][a-z]*)*$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'use'],
      },
    ],
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'use'],
      },
    ],
  },
  overrides: [
    // 扫描 .vue/html 文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
  ],
  ignoreFiles: [
    'node_modules',
    'dist',
    'public',
    'output',
    'coverage',
    'temp',
    '*.js',
    '*.cjs',
    '*.mjs',
    '*.ts',
    '*.tsx',
    '*.svg',
    '*.gif',
    '*.md',
  ],
}
