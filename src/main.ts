import store from '@/store'
import dayjs from 'dayjs'
import { createSSRApp } from 'vue'
import App from './App.vue'
import { prototypeInterceptor, requestInterceptor, routeInterceptor } from './interceptors'

import 'uno.css'
import '@/styles/index.scss'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  return {
    app,
  }
}
