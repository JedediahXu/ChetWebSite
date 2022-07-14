/*
* @Description: API
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-01 12:17:13
*/
import request from "../utils/request"

export function mallGoodsDetailAPI(params: object) {
  return request({
    url: '/apis/api/historyTime',
    method: 'get',
    params
  })
}
