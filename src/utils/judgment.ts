/*
 * @Description: 判断机型
 * @Author: Chetxu
 * @Date: 2022-08-12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 11:06:09
 */
export function judgment(): 'mobile' | 'pc' {
	const userAgent: string = window.navigator.userAgent
	let isMobile: any = false
	if (userAgent.indexOf('iPhone') >= 0) isMobile = true
	if (userAgent.indexOf('Android') >= 0) isMobile = true
	if (userAgent.indexOf('iPad') >= 0) isMobile = true
	return isMobile ? 'mobile' : 'pc'
}
