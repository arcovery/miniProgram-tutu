import type { resData } from '@/@types/home'
const BaseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
// uni.addInterceptor('request', {
//   complete: (arg) => {
//     console.log('请求拦截 完成')
//   },
//   fail: (err) => {
//     console.log('请求拦截 错误')
//   },

//   invoke: (arg: {
//     complete: Function
//     data: { distributionSite: 1 }
//     fail: Function
//     method: 'GET'
//     success: Function
//     url: string
//   }) => {
//     console.log('请求拦截 invoke')
//     if (arg.url.includes('https://')) {
//       arg.url = BaseUrl + arg.url
//     }
//     console.log(arg)
//   },
//   success: (arg) => {
//     console.log('请求拦截 成功')
//   },
// })

/**
 * 封装uni.request 网路请求
 *
 * @template T
 * @param {UniApp.RequestOptions} {
 *   url,
 *   ...option
 * }
 * @return {*}  {Promise<Array<T>>}
 */
export const http = <T = any>({
  url,
  ...option
}: UniApp.RequestOptions): Promise<Array<T> | any> => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...option,
      url: BaseUrl + url,
      success: (res) => {
        resolve((res.data as resData<T>).result)
      },
      fail: (error) => {
        uni.showToast({
          title: '网络异常',
          icon: 'none',
          mask: true,
        })
        reject(error)
      },
    })
  })
}
