<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="bg-base-300 shadow-2xl w-full">
		<div v-if="newData.length > 0" class="article">
			<ul class="article-list">
				<li class="item">
					<span class="index" data-index="1">1</span>
					<div class="content">
						<a href="https://juejin.cn/post/7041038709906472974" target="_blank" class="title" @mouseenter="leave(0)">{{ newData[3].article_info.title }}</a>
						<div class="meta">
							<span class="item date">2021-12-13</span>
							<span class="item views"><i class="iconfont icon-eye"></i> {{ newData[3].article_info.view_count }}</span>
							<span class="item comments"><i class="iconfont icon-comment"></i> {{ newData[3].article_info.comment_count }}</span>
						</div>
					</div>
				</li>
				<li class="item">
					<span class="index" data-index="2">2</span>
					<div class="content">
						<a href="https://juejin.cn/post/7032832901213323271" target="_blank" class="title" @mouseenter="leave(1)">{{ newData[7].article_info.title }}</a>
						<div class="meta">
							<span class="item date">2021-11-21</span>
							<span class="item views"> <i class="iconfont icon-eye"> </i>{{ newData[7].article_info.view_count }}</span>
							<span class="item comments"> <i class="iconfont icon-comment"> </i> {{ newData[7].article_info.comment_count }}</span>
						</div>
					</div>
				</li>
				<li class="item">
					<span class="index" data-index="3">3</span>
					<div class="content">
						<a href="https://juejin.cn/post/7031808193344831518" target="_blank" class="title" @mouseenter="leave(2)">{{ newData[1].article_info.title }}</a>
						<div class="meta">
							<span class="item date">2021-11-18</span><span class="item views"><i class="iconfont icon-eye"></i>{{ newData[1].article_info.view_count }}</span
							><span class="item comments"><i class="iconfont icon-comment"></i> {{ newData[1].article_info.comment_count }}</span>
						</div>
					</div>
				</li>
				<li class="item">
					<span class="index" data-index="4">4</span>
					<div class="content">
						<a href="https://juejin.cn/post/7054729782944071711" target="_blank" class="title" @mouseenter="leave(3)">{{ newData[2].article_info.title }}</a>
						<div class="meta">
							<span class="item date">2022-01-19</span><span class="item views"><i class="iconfont icon-eye"></i>{{ newData[2].article_info.view_count }}</span
							><span class="item comments"><i class="iconfont icon-comment"></i> {{ newData[2].article_info.comment_count }}</span>
						</div>
					</div>
				</li>
				<li class="item">
					<span class="index" data-index="5">5</span>
					<div class="content">
						<a href="https://juejin.cn/post/7032244693798748174" target="_blank" class="title" @mouseenter="leave(4)">{{ newData[8].article_info.title }}</a>
						<div class="meta">
							<span class="item date">2021-11-19</span><span class="item views"><i class="iconfont icon-eye"></i>{{ newData[8].article_info.view_count }}</span>
							<span class="item comments"><i class="iconfont icon-comment"></i> {{ newData[8].article_info.comment_count }}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<template v-if="newData.length <= 0">
			<el-skeleton v-for="(item, index) in jueJinList" :key="index">
				<template #template>
					<div>
						<el-skeleton-item variant="p" class="item template-item" />
					</div>
				</template>
			</el-skeleton>
		</template>
	</div>
	<div class="knight w-full">
		<div class="pic w-full h-full">
			<img :src="bannerList[showNumber].img" class="w-full h-full" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { queryJuejin } from '@/api'
import { useShow } from '@/utils/useLoad'

interface JuejinList {
	article_info: {
		title?: string
		view_count?: string
		digg_count?: string
		comment_count?: string
	}
}

const { jueJinList } = useShow()

const showNumber = ref<number>(0)
const newData = ref<Array<JuejinList>>([])
const bannerList = reactive([
	{
		img: '/static/img/message/dm.jpeg',
	},
	{
		img: '/static/img/message/gch.jpeg',
	},
	{
		img: '/static/img/message/jh.jpeg',
	},
	{
		img: '/static/img/message/vue.jpeg',
	},
	{
		img: '/static/img/message/sjjg.png',
	},
])
const leave = (index: number) => {
	showNumber.value = index
}
const queryListJuejin = () => {
	queryJuejin().then(res => {
		newData.value = res.data.data.data
	})
}
queryListJuejin()
</script>

<style lang="scss" scoped>
.article {
	overflow: auto;

	& .article-list {
		list-style: none;
		padding: 0;
		margin-bottom: 0;

		> .item {
			display: flex;
			padding: 0 1rem;
			margin-bottom: 0.618rem;
			color: var(--text-darker);
		}

		> .item .index[data-index='1'] {
			background-color: #0088f5;
		}

		> .item .index[data-index='2'] {
			background-color: #4caf50b3;
		}

		> .item .index[data-index='3'] {
			background-color: #ff572299;
		}

		> .item .index[data-index='1'],
		> .item .index[data-index='2'],
		> .item .index[data-index='3'] {
			color: #fff;
			font-size: 9.9456px;
		}

		> .item .index {
			width: 14px;
			height: 14px;
			line-height: 14px;
			margin-top: 4px;
			display: inline-block;
			flex-shrink: 0;
			margin-right: 0.618rem;
			text-align: center;
			border-radius: 2px;
			color: var(--text-disabled);
			font-weight: 700;
			font-size: 13px;
		}

		> .item .content {
			flex-shrink: 1;
			overflow: hidden;
		}

		> .item .title {
			display: inline-block;
			max-width: 100%;
			border-top: 1px solid transparent;
			border-bottom: 1px solid transparent;
			font-size: 13.58px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		> .item .meta {
			font-size: 12.432px;
			color: var(--text-disabled);
		}

		> .item .meta .item.date {
			margin-right: 1.236rem;
		}

		> .item .meta .item {
			display: inline-block;
		}

		> .item .meta .item.views {
			width: 5rem;
			margin-right: 0.618rem;
		}

		> .item .title:hover {
			text-decoration: none;
			border-bottom-color: initial;
		}
	}
}

ul,
ol {
	margin-bottom: 1em;
	padding-left: 3em;
	vertical-align: baseline;
}

.template-item {
	width: 100%;
	line-height: 30px;
	height: 30px;
	margin-top: 20px;
}
</style>
