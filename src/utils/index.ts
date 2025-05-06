/**
 * 转换env配置
 * @param envOptions
 * @descrition boolean和数字类型转换
 */
export function convertEnv(envOptions: Record<string, any>): ImportMetaEnv {
  const result: any = {}
  if (!envOptions)
    return result

  for (const envKey in envOptions) {
    let envVal = envOptions[envKey]
    if (['true', 'false'].includes(envVal))
      envVal = envVal === 'true'

    if (['VITE_PORT'].includes(envKey))
      envVal = +envVal

    result[envKey] = envVal
  }
  return result
}

const getLastPage = () => {
  // getCurrentPages() 至少有1个元素，所以不再额外判断
  // const lastPage = getCurrentPages().at(-1)
  // 上面那个在低版本安卓中打包会报错，所以改用下面这个【虽然我加了 src/interceptions/prototype.ts，但依然报错】
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

const ensureDecodeURIComponent = (url: string) => {
  if (url.startsWith('%')) {
    return ensureDecodeURIComponent(decodeURIComponent(url))
  }
  return url
}

/**
 * 解析 url 得到 path 和 query
 * 比如输入url: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor
 * 输出: {path: /pages/login/index, query: {redirect: /pages/demo/base/route-interceptor}}
 */
export const getUrlObj = (url: string) => {
  const [path, queryStr] = url.split('?')
  // console.log(path, queryStr)

  if (!queryStr) {
    return {
      path,
      query: {},
    }
  }
  const query: Record<string, string> = {}
  queryStr.split('&').forEach((item) => {
    const [key, value] = item.split('=')
    // console.log(key, value)
    query[key] = ensureDecodeURIComponent(value) // 这里需要统一 decodeURIComponent 一下，可以兼容h5和微信y
  })
  return { path, query }
}

/**
 * 获取当前页面路由的 path 路径和 redirectPath 路径
 * path 如 '/pages/login/index'
 * redirectPath 如 '/pages/demo/base/route-interceptor'
 */
export const currRoute = () => {
  const lastPage = getLastPage()
  const currRoute = (lastPage as any).$page
  // console.log('lastPage.$page:', currRoute)
  // console.log('lastPage.$page.fullpath:', currRoute.fullPath)
  // console.log('lastPage.$page.options:', currRoute.options)
  // console.log('lastPage.options:', (lastPage as any).options)
  // 经过多端测试，只有 fullPath 靠谱，其他都不靠谱
  const { fullPath } = currRoute as { fullPath: string }
  // console.log(fullPath)
  // eg: /pages/login/index?redirect=%2Fpages%2Fdemo%2Fbase%2Froute-interceptor (小程序)
  // eg: /pages/login/index?redirect=%2Fpages%2Froute-interceptor%2Findex%3Fname%3Dfeige%26age%3D30(h5)
  return getUrlObj(fullPath)
}

/**
 * 判断是否为合法的 IPv4 地址
 * @param configIp - 待验证的 IP 地址字符串
 * @returns 如果是合法的 IPv4 地址返回 true，否则返回 false
 */
export function isIp(configIp: string): boolean {
  // 定义 IPv4 正则表达式
  const ipv4Regex = /^(?:\d{1,3}\.){3}\d{1,3}$/

  // 检查是否匹配正则表达式
  if (!ipv4Regex.test(configIp)) {
    return false
  }

  // 进一步验证每个数字部分是否在 0-255 范围内
  const parts = configIp.split('.')
  for (const part of parts) {
    const num = Number.parseInt(part, 10)
    if (num < 0 || num > 255) {
      return false
    }
  }

  return true
}
