/*
 * @Description: API
 * @Author: ChetXu
 * @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-08 10:49:37
 */
import request from '../utils/request'

//所有文章
export function queryArticle(params: object) {
	return request({
		url: '/apis/api/article/queryPagination',
		method: 'get',
		params,
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
		method: 'get',
	})
}

export function queryAmount() {
	return request({
		url: '/apicookie/api/article/queryAmount',
		method: 'get',
	})
}

export function queryIP(ip) {
	return request({
		url: `/IP/api.php?query=${ip}&co=&resource_id=6006&oe=utf8`,
		method: 'get',
	})
}

export function updateVolume(Id) {
	return request({
		url: `/apis/api/article/updateVolume?Id=${Id}`,
		method: 'get',
	})
}

//掘金文章
export function queryJuejin() {
	return request({
		url: '/apis/api/article/nuggetsArticles',
		method: 'post',
	})
}

//根据ID 获取文章详情
export function queryIdListArticle(ip) {
	return request({
		url: `/apis/api/article/queryIdListArticle/${ip}`,
		method: 'get',
	})
}

export function addeMaile(mails) {
	const params = {
		mail: mails,
	}
	return request({
		url: '/apis/api/article/addeMail',
		method: 'get',
		params,
	})
}
