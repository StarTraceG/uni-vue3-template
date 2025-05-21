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
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#4d80f0',
    backgroundColor: '#F8F8F8',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      // 注意tabbar路由需要使用 layout:tabbar 布局
      {
        pagePath: 'pages/index/index',
        text: '首页',
        icon: 'i-ant-design-home-outlined',
        iconType: 'unocss',
      },
      {
        pagePath: 'pages/msg/index',
        text: '消息',
        icon: 'i-ant-design-message-outlined',
        iconType: 'unocss',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        icon: 'i-ant-design-user-outlined',
        iconType: 'unocss',
      },
    ],
  },
})
