# 一个Uniapp的起始模版，Vite,Vue3,TypeScript

## 所用技术栈

- 依赖管理：node v20.x, 如果你已经使用 nvm，可以参考 [Github: nvm](https://github.com/nvm-sh/nvm#deeper-shell-integration) 来实现 node 版本的自动切换
- 小程序框架： [uni-app](https://uniapp.dcloud.io/)
- 构建工具： [Vite5.x](https://cn.vitejs.dev/)
- 前端框架： [Vue3.x](https://v3.cn.vuejs.org/)
- 编程语言： [TypeScript](https://www.typescriptlang.org/)
- 代码规范：
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Stylelint](https://stylelint.io/)
- 提交规范：
  - [husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://commitlint.js.org/#/)
- 原子化 CSS 引擎：[UnoCSS](https://github.com/unocss/unocss)
- css 预处理器： [scss](https://sass-lang.com/)
- 状态管理工具：[pinia](https://pinia.vuejs.org/)
- pinia 数据持久化插件：[pinia-plugin-persist-uni](https://allen-1998.github.io/pinia-plugin-persist-uni/)

### UI 框架

- [Wot Design Uni](https://github.com/Moonofweisheng/wot-design-uni) - 基于 Vue3 + TS 开发，提供 70+ 高质量组件，支持暗黑模式、国际化和自定义主题
- [Uni UI](https://github.com/dcloudio/uni-ui) - 性能最好的 UniApp 组件库
- [uv-ui](https://github.com/climblee/uv-ui) - 基于 uView2.x 改进后全面支持 vue3，兼容vue3+2、nvue、app、h5、多端小程序的uni-app生态框架

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`vite-plugin-uni-polyfill`](https://github.com/Ares-Chang/vite-plugin-uni-polyfill) - 解决 UniApp 依赖版本与 Vue 主版本库差异导致其它库不可使用问题
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 增强 Vue 开发者体验。
- [`uni-helper`](https://github.com/uni-helper) 组织

  - [`uni-types`](https://github.com/uni-helper/uni-typed/tree/main/packages/uni-types) - UniApp 类型增强，为 Vue v3 uni-app、uni-cloud 和 uni-ui 组件提供 TypeScript 类型。

  - [`unocss-preset-uni`](https://github.com/uni-helper/unocss-preset-uni) - 专为 uni-app 打造的 UnoCSS 预设

  - [`unocss-applet`](https://github.com/unocss-applet/unocss-applet) - UnoCSS 小程序预设，兼容在小程序中使用 `Attributify Mode`

  - [`eslint-config`](https://github.com/uni-helper/eslint-config) - 适用于 UniApp 的 [Antfu ESLint](https://github.com/antfu/eslint-config) 配置
  - [`vite-plugin-uni-components`](https://github.com/uni-helper/vite-plugin-uni-components) - 自动加载组件，从 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 派生并修改以适应UniApp。

## 使用

### 开发

```bash
pnpm i
```

```bash
pnpm dev:对应平台 如 pnpm dev:mp-weixin
```

### 查看已启用的 ESLint 规则

```bash
npx @eslint/config-inspector
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build:对应平台 如 pnpm build:mp-weixin
```
