/*
 * @Description: 设备型号
 * @Author: ChetXu
 * @Date: 2022-09-05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 11:44:20
 */
import parser from 'ua-parser-js'

export const uaParser = (userAgent: string) => {
	const parseResult = parser(userAgent || '')
	const browserName = String(parseResult.browser.name).toLowerCase()
	const isTargetDevice = (browsers: string[]) => {
		return browsers.some(browser => browser.toLowerCase() === browserName)
	}
	return {
		result: parseResult,
		isIE: isTargetDevice(['compatible', 'MSIE', 'IE']),
		isEdge: isTargetDevice(['Edge']),
		isFirefox: isTargetDevice(['Firefox']),
		isChrome: isTargetDevice(['Chrome', 'Chromium']),
		isSafari: isTargetDevice(['Safari']),
		isWechat: isTargetDevice(['Wechat']),
		isIos: parseResult.os.name === 'iOS',
		isAndroid: parseResult.os.name === 'Android',
		isMobile: parseResult.device.type === 'mobile',
	}
}
