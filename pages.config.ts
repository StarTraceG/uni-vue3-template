import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationBarTitleText: 'uni-vue3-template', // 导航栏标题
    navigationBarBackgroundColor: '@navBgColor', // 顶部导航栏背景色
    navigationBarTextStyle: '@navTxtStyle', // 导航栏标题颜色及状态栏前景颜色
    backgroundColor: '@bgColor', // 下拉显示出来的窗口的背景色
    backgroundTextStyle: '@bgTxtStyle', // 下拉 loading 的样式
    backgroundColorTop: '@bgColorTop', // 顶部窗口的背景色（bounce回弹区域）
    backgroundColorBottom: '@bgColorBottom', // 底部窗口的背景色（bounce回弹区域）
    h5: {
      navigationStyle: 'custom',
    },
  },
  easycom: {
    autoscan: true,
    custom: {
      // Wot Design Uni 组件自动引入
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      // uni-ui 组件自动引入
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      // uv-ui 组件自动引入
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
})
