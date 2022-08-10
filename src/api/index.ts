/*
* @Description: API
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-09 21:14:09
*/
import request from "../utils/request"

export function queryArticle(params: object) {
  return request({
    url: '/apis/api/article/queryPagination',
    method: 'get',
    params
  })
}

export function mallGoodsCates() {
  return request({
    url: '/apis/api/article/cates',
    method: 'get',
  })
}


export function queryPhoto() {
  return request({
    url: '/apis/api/article/queryPhoto',
    method: 'get',
  })
}

export function queryLink() {
  return request({
    url: '/apis/api/article/queryLink',
    method: 'get'
  })
}
