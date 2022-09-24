<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="pcContent">
		<div class="module margin background overflow" style="display: flex">
			<div id="A_article_content" class="detail">
				<div class="knowledge">
					<div class="title">
						<h2 class="text">{{ reserve.title }}</h2>
						<div class="meta">
							<span style="margin-right: 2rem"><i class="iconfont icon-clock-outline"></i>{{ reserve.pub_date }} </span>
							<span style="margin-right: 2rem"> <i class="iconfont icon-t"></i>共 {{ reserve.word_count }} 字 需阅读 {{ reserve.reading_time }}分钟 </span>
							<span style="margin-right: 2rem"
								><i class="iconfont icon-eye"></i><span>{{ reserve.visitor_volume }}</span
								>次阅读</span
							>
						</div>
					</div>
					<div class="divider" style="padding: 0; margin-bottom: 20px"></div>
					<section class="global-markdown-html">
						<!-- <div class="figure-wrapper">
            <figure class="image " data-status="loaded">
              <div class="placeholder error">
                <i class="iconfont icon-image-error"></i>
              </div>
              <img class="lozad loaded" onload="this.parentElement.dataset.status = 'loaded'"
                :src="'/apis' + reserve.cover_img">
            </figure>
          </div> -->
						<div class="detail-md">
							<article class="prose pcprose dark:prose-invert pcprose-color">
								<div id="loading-md" v-html="reserve.content"></div>
							</article>
						</div>
					</section>
				</div>
			</div>
			<div id="catalog-content-md" class="detail-title prose"></div>
		</div>
		<div class="divider"></div>
	</div>
	<el-backtop :right="50" :bottom="100" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { queryIdListArticle } from '@/api'
import { updateVolume } from '@/api'
import Catalog from '@/utils/catalog'

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
			cover_img: '---',
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

updateVolume(route.query.id).then((res: any) => {
	console.log(res)
})

// 使用
onMounted(() => {
	setTimeout(() => {
		new Catalog({
			contentEl: 'loading-md',
			catalogEl: 'catalog-content-md',
			selector: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			cool: true, // 炫酷模式开关
		})
	}, 800)
})
</script>

<style lang="scss" scoped>
.pcContent {
	h2 {
		font-size: 20.3px;
		font-weight: 700;
		margin: 1em 0;
	}

	& .divider {
		padding: 1rem 14rem 1rem 3rem;
		border-top: 2px dotted var(--module-bg-darker-1);
		box-sizing: border-box;
		margin: 0;

		&.default {
			--divider-gap: 1rem;
		}
	}

	.detail {
		padding: 1rem 14rem 1rem 3rem;
		position: relative;
		overflow: hidden;
		height: auto;
		width: 100%;
		transition: height 0.25s;

		.knowledge {
			user-select: text;
			position: relative;
			flex: 1;

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
				font-size: 14px;
				user-select: none;
				line-height: 2;
				margin-top: 10px;
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
}

.pcprose-color {
	background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
}

.detail-title {
	display: flex;
	margin-top: 9rem;
	position: fixed;
	width: 12rem;
	height: 50%;
	right: 14px;
}
</style>
