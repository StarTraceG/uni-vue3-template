declare module '@climblee/uv-ui' {
  const uvUI: any // 替换为具体类型（如有文档参考）
  export default uvUI
}

declare module 'qs'

declare const __VITE_APP_PROXY__: true | false

declare const __UNI_PLATFORM__:
  | 'h5'
  | 'app'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-jd'
  | 'mp-kuaishou'
  | 'mp-lark'
  | 'mp-qq'
  | 'mp-toutiao'
  | 'mp-weixin'
  | 'quickapp-webview'
  | 'quickapp-webview-huawei'
  | 'quickapp-webview-union'

declare interface IHttpResult<T = any> {
  code?: number
  message?: string
  listData?: T
  singleData?: T
}

// uni.uploadFile文件上传参数
declare interface IUniUploadFileOptions {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}

declare interface IUserInfo {
  nickname?: string
  avatar?: string
  /** 微信的 openid，非微信没有这个字段 */
  openid?: string
  token?: string
}
