/*
* @Description: API
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-03 21:51:25
*/
import request from "../utils/request"

export function queryArticle() {
  return request({
    url: '/apis/api/article/queryArticle',
    method: 'get',
  })
}

export function mallGoodsCates() {
  return request({
    url: '/apis/api/article/cates',
    method: 'get',
  })
}
