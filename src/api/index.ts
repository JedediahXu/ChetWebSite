/*
* @Description: API
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-12 21:24:40
*/
import request from "../utils/request"

//所有文章
export function queryArticle(params: object) {
  return request({
    url: '/apis/api/article/queryPagination',
    method: 'get',
    params
  })
}

//分类
export function mallGoodsCates() {
  return request({
    url: '/apis/api/article/cates',
    method: 'get',
  })
}

//照片
export function queryPhoto() {
  return request({
    url: '/apis/api/article/queryPhoto',
    method: 'get',
  })
}

//友情链接
export function queryLink() {
  return request({
    url: '/apis/api/article/queryLink',
    method: 'get'
  })
}
