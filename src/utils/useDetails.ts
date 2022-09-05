/*
* @Description: 设备型号
* @Author: xuhuazhi
* @Date: 2022-09-05
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-09-05
*/
import parser from 'ua-parser-js'

export const uaParser = (userAgent: string) => {
  const parseResult = parser(userAgent || '')
  const browserName = String(parseResult.browser.name).toLowerCase()
  const isTargetDevice = (browsers: string[]) => {
    return browsers.some((browser) => browser.toLowerCase() === browserName)
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
    isMobile: parseResult.device.type === 'mobile'
  }
}
