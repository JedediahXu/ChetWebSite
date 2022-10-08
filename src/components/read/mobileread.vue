<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="mobilesContent">
		<div class="module margin background overflow">
			<div id="A_article_content" class="detail">
				<div id="xu" class="knowledge">
					<div class="title">
						<h2 class="text">{{ reserve.title }}</h2>
						<div class="meta">
							<span style="margin-right: 0.5rem"><i class="iconfont icon-clock-outline"></i>{{ reserve.pub_date }} </span>
							<span style="margin-right: 0.5rem"> <i class="iconfont icon-t"></i>共 {{ reserve.word_count }} 字 需阅读 {{ reserve.reading_time }}分钟 </span>
							<span style="margin-right: 0.5rem"
								><i class="iconfont icon-eye"></i><span>{{ reserve.visitor_volume }}</span
								>次阅读</span
							>
						</div>
					</div>
					<section class="global-markdown-html">
						<div class="figure-wrapper">
							<figure class="image" data-status="loaded">
								<div class="placeholder error">
									<i class="iconfont icon-image-error"></i>
								</div>
								<img class="lozad loaded" onload="this.parentElement.dataset.status = 'loaded'" :src="'/apis' + reserve.cover_img" />
							</figure>
						</div>
						<article class="prose dark:prose-invert m-0">
							<div v-html="reserve.content"></div>
						</article>
					</section>
				</div>
			</div>
			<div class="divider" @click="returntTop">点击回到顶部</div>
			<!-- 点击回到顶部 -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { queryIdListArticle } from '@/api'
import { updateVolume } from '@/api'

interface reserves {
	Id?: number
	author_id?: string
	cate_id?: number
	content?: string
	cover_img?: string
	is_delete?: string
	pub_date?: string
	state?: string
	title?: string
	word_count?: string
	visitor_volume?: string
	reading_time?: string
}

const route = useRoute()
const reserve = ref<reserves>({})
queryIdListArticle(route.query.id).then(res => {
	if (res.data.data.length <= 0) {
		reserve.value = {
			title: '---',
			visitor_volume: '---',
			reading_time: '---',
			pub_date: '---',
			word_count: '---',
			content: '---',
		}
	}
	if (res.data.data.length > 0) {
		reserve.value = res.data.data[0]
	}
})

updateVolume(route.query.id).then(res => {
	console.log(res)
})

const returntTop = () => {
	window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped>
.mobilesContent {
	h2 {
		font-size: 20.3px;
		font-weight: 700;
		margin: 1em 0;
	}

	.detail {
		position: relative;
		overflow: hidden;
		height: auto;
		transition: height 0.25s;

		.knowledge {
			user-select: text;
			position: relative;

			&.divider {
				border-top: 2px dotted var(--module-bg-darker-1);
				box-sizing: border-box;
				margin: 0;
				padding: 0;

				&.default {
					--divider-gap: 1rem;
				}
			}

			& .title {
				margin: 1em 0 1.5em;
				text-align: center;
			}

			& .title .text {
				font-weight: 700;
				font-size: 19.285px;
				margin-bottom: 1rem;
			}

			& .title .meta {
				display: inline-block;
				color: var(--text-disabled);
				font-size: 12.432px;
				user-select: none;
				line-height: 2;
			}

			& .title .meta .iconfont {
				font-size: 1em;
				font-family: iconfont !important;
				font-size: 16px;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				margin-right: 0.309rem;
			}

			& .title .meta .vertical {
				top: -1px;
			}
		}

		.global-markdown-html {
			font-size: 14.7px;

			& .figure-wrapper {
				width: 100%;
				display: flex;
				margin-bottom: 1rem;
				justify-content: center;
				overflow: hidden;
				text-align: center;
			}

			& figure.image[data-status='loaded'] {
				width: auto;
			}

			& figure.image {
				position: relative;
				border-radius: 2px;
				border: 1px solid rgb(232, 232, 232);
				text-indent: 0;
				text-align: center;
			}

			& .figure-wrapper > figure {
				display: block;
			}

			& figure.image .placeholder {
				color: var(--text-secondary);
				visibility: hidden;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				pointer-events: none;
			}

			& figure.image .placeholder {
				visibility: hidden;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				pointer-events: none;
			}

			& figure.image[data-status='loaded'] img {
				min-width: auto;
				min-height: auto;
			}

			& figure.image img {
				display: block;
				max-width: 100%;
				padding: 0.618rem;
				color: transparent;
				cursor: pointer;
				transition: opacity 0.1s;
			}
		}
	}

	article,
	section {
		margin: 0 auto;
		width: 100%;
	}
}
</style>
