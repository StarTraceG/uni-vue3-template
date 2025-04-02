/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line ts/no-empty-object-type
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PORT: number
  readonly VITE_UNI_APPID: string
  readonly VITE_USE_PROXY: boolean
  readonly VITE_PROXY_PREFIX: string
  readonly VITE_SERVER_BASEURL: string
  readonly VITE_UPLOAD_BASEURL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
