/*
* @Description: API
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 23:58:13
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

export function queryIP(ip) {
  return request({
    url: `/IP/api.php?query=${ip}&co=&resource_id=6006&oe=utf8`,
    method: 'get'
  })
}


// const cookieInfo = `_ga=GA1.2.1321116537.1645776876; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227068557831083017764%2522%252C%2522user_unique_id%2522%253A%25227068557831083017764%2522%252C%2522timestamp%2522%253A1645776876510%257D; n_mh=EavPya4RzlYXP6hk-Y-NYZZ-GL2RoRGNzPQy3nSejCI; sid_guard=40a3b00b7c04117360d96107c3dbd0b7%7C1651028323%7C31536000%7CThu%2C+27-Apr-2023+02%3A58%3A43+GMT; uid_tt=8c0d342341fae0823c5d3ec1bcd53fa9; uid_tt_ss=8c0d342341fae0823c5d3ec1bcd53fa9; sid_tt=40a3b00b7c04117360d96107c3dbd0b7; sessionid=40a3b00b7c04117360d96107c3dbd0b7; sessionid_ss=40a3b00b7c04117360d96107c3dbd0b7; sid_ucp_v1=1.0.0-KGQ1MGNiMDJiYTgwNTQ5Yjg4MTAwNzljMWFiYWYyYWI2NjJhMjI5NDIKFwiNquDA_fXFBhDj4qKTBhiwFDgCQPEHGgJsZiIgNDBhM2IwMGI3YzA0MTE3MzYwZDk2MTA3YzNkYmQwYjc; ssid_ucp_v1=1.0.0-KGQ1MGNiMDJiYTgwNTQ5Yjg4MTAwNzljMWFiYWYyYWI2NjJhMjI5NDIKFwiNquDA_fXFBhDj4qKTBhiwFDgCQPEHGgJsZiIgNDBhM2IwMGI3YzA0MTE3MzYwZDk2MTA3YzNkYmQwYjc; MONITOR_WEB_ID=f9f18b45-5e19-40ee-b91f-3a153a1ac7fc; _gid=GA1.2.490729673.1657498462; _tea_utm_cache_2608={%22utm_source%22:%22infinitynewtab.com%22}; _gat=1`
// //掘金文章
// export function queryJuejin() {
//   return request({
//     url: 'https://api.juejin.cn/content_api/v1/article/query_list?aid=2608&uuid=7068557831083017764',
//     method: 'post',
//     headers: { Cookie: cookieInfo }
//   })
// }




