import uniHelper from '@uni-helper/eslint-config'

export default uniHelper(
  {
    uni: true,
    uniJson: true,
    unocss: true,
    typescript: true,
    vue: {
      overrides: {
        // 强制每行的最大属性数
        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 5,
          },
          multiline: {
            max: 1,
          },
        }],
        // 禁止使用控制台
        'no-console': 'off',
        // 制使用 function 而不是箭头函数或函数表达式来声明顶级函数
        'antfu/top-level-function': 'off',
      },
    },
    formatters: true,
    // 不再支持 '.eslintignore'，请改用 'ignores' 配置项
    ignores: [
      // ...globs
    ],
  },
)
