import uniHelper from '@uni-helper/eslint-config'

export default uniHelper(
  {
    uni: true,
    uniJson: true,
    unocss: true,
    vue: {
      overrides: {
        'vue/custom-event-name-casing': ['kebab-case' | 'camelCase'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
        'vue/multi-word-component-names': 'off',
      },
    },
    typescript: {
      overrides: {},
    },
  },
)
