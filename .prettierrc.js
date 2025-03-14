module.exports = {
  printWidth: 200, // 一行代码默认字符数
  tabWidth: 2, // tab 宽度为 2 空格
  useTabs: false, // 是否使用 tab 来缩进
  semi: false, // 结尾是否添加分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 值只在有需要的情况下才添加
  bracketSpacing: true, // 对象中 key 和 value 值和括号间是否需要空格
  arrowParens: 'always', // 箭头函数单个参数时是否添加括号，always 总是添加，avoid 尽可能不添加
  trailingComma: 'all', // 尾部逗号兼容所有可能情况
  vueIndentScriptAndStyle: true, // vue script 和 style 标签中是否缩进
  proseWrap: 'never', // 文章换行,默认情况下会对你的 markdown 文件换行进行 format 会控制在 printwidth 以内
  htmlWhitespaceSensitivity: 'strict', // html 中的空格敏感性
  endOfLine: 'lf', // 尾行换行符 <lf|crlf|cr|auto>
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
