/*
* @Description: network request
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: xuhuazhi
 * @LastEditTime: 2022-06-01 15:40:00
*/
import axios from 'axios'

let url: any = import.meta.env // (不存在跨域问题 可使用)

const service = axios.create({
  baseURL: url.VITE_APP_BASE_API,
  timeout: 40 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // 配置OAuth 2.0的认证头
  },
  withCredentials: false 
})


// 请求前置拦截器
service.interceptors.request.use((config) => {
  if (config.method === 'post' && !config.data) {
    config.data = config.params
    config.params = null
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应前置拦截器
service.interceptors.response.use((res) => {
  return Promise.resolve(res)
}, (error) => {
  let errMsg = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        errMsg = '错误的请求'
        break
      case 500:
        errMsg = '服务器端出错'
        break
      case 401:
        errMsg = '权限校验错误'
        break
      default:
        errMsg = '网络错误'
    }
  }
  return Promise.reject(errMsg)
})

export function request(config: any) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios({
        ...config
      })
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

export default service
