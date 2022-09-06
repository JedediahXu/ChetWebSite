/*
 * @Description: 骨架数据
 * @Author: xuhuazhi
 * @Date: 2022-09-05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-06 09:25:38
 */
import { ref } from 'vue'

export function useShow() {
	const listPhotoLoad = ref([
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
	])
	const listArchiveLoad = ref([
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
		{
			Id: 0,
		},
	])
	const listArticleLoad = ref([
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
		{
			Id: 5,
			author_id: 'ChetSerenade',
			cate_id: 2,
			content: '文章赵蛟',
			cover_img: '/uploads/e38127eb7b4c83814ab20a2219eb7ba3',
			introduce: '一句中心点',
			is_delete: '0',
			pub_date: '2022-07-19',
			state: '已发布',
			title: '标题',
		},
	])

	return {
		listPhotoLoad,
		listArchiveLoad,
		listArticleLoad,
	}
}
