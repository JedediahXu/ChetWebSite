/*
 * @Description: network request
 * @Author: Chetxu
 * @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-27 22:43:53
 */
declare const window: Window & { axios: any }

const url: any = import.meta.env // (不存在跨域问题 可使用)

const service = window.axios.create({
	baseURL: url.VITE_APP_BASE_API,
	timeout: 40 * 1000,
	headers: {
		'Content-Type': 'application/json; charset=utf-8', // 配置OAuth 2.0的认证头
	},
	withCredentials: true,
})

// 请求前置拦截器
service.interceptors.request.use(
	config => {
		if (config.method === 'post' && !config.data) {
			config.data = config.params
			config.params = null
		}
		return config
	},
	error => {
		return Promise.reject(error)
	},
)

// 响应前置拦截器
service.interceptors.response.use(
	res => {
		return Promise.resolve(res)
	},
	error => {
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
	},
)

export function request(config: any) {
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve, reject) => {
		try {
			const result = await window.axios({
				...config,
			})
			resolve(result)
		} catch (err) {
			reject(err)
		}
	})
}

export default service
