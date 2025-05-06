import store from '@/store'
import dayjs from 'dayjs'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app,
  }
}
