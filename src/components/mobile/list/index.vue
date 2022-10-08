<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div v-if="isLoad" class="list">
		<div v-for="(item, index) in listArticle" :key="index" class="article-item list-item" @click="read(item, item.Id, item.title)">
			<div class="thumbnail">
				<div class="image" :style="{ backgroundImage: 'url(' + '/apis' + item.cover_img + ')' }"></div>
			</div>
			<div class="content">
				<div class="body">
					<h4 class="title">
						<a class="link">{{ item.title }}</a>
					</h4>
					<p class="description">{{ item.introduce }}</p>
				</div>
				<div class="meta">
					<span class="date"> <i class="iconfont icon-clock"> </i>{{ item.pub_date }} </span>
					<span class="views">
						<i class="iconfont icon-eye"> </i>
						{{ item.visitor_volume }}
					</span>
					<span class="comments">
						<i class="iconfont icon-category" data-v-70ac518a=""></i>
						<span>{{ item.author_id }}</span>
					</span>
				</div>
			</div>
		</div>
		<Loadmore :totale="totale" class="mt-5" @click="toEmits" />
	</div>
	<template v-else>
		<el-skeleton v-for="(item, index) in listArticleLoad" :key="index" class="article-item list-item" animated>
			<template #template>
				<div class="thumbnail">
					<el-skeleton-item variant="image" class="image" />
				</div>
				<div class="middle-content w-full">
					<el-skeleton-item variant="p" class="middle-width" />
					<el-skeleton-item variant="p" class="middle-content-p" />
					<el-skeleton-item variant="text" class="middle-content-el" />
				</div>
			</template>
		</el-skeleton>
	</template>
</template>

<script setup lang="ts">
import Loadmore from '@/components/loadMore/index.vue'
import { useShow } from '@/utils/useLoad'
import type { PropType } from 'vue'

interface typeList {
	Id: number
	author_id?: string
	cate_id?: number
	content?: string
	cover_img?: string
	is_delete?: string
	pub_date?: string
	state?: string
	title: string
	word_count?: string
	visitor_volume?: string
	reading_time?: string
	introduce: string
}

const $router = useRouter()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	listArticle: {
		type: Array as PropType<typeList[]>,
		required: true,
		// eslint-disable-next-line vue/require-valid-default-prop
		default: true,
	},
	totale: {
		type: Object,
		required: true,
		default: Object,
	},
})

const emits = defineEmits(['getChili'])
const toEmits = () => {
	emits('getChili')
}

//选中文章
const read = (item: object, id, title) => {
	$router.push({
		name: 'read',
		query: {
			id: id,
			title: title,
		},
	})
}

const isLoad = ref<boolean>(false)
const { listArticleLoad } = useShow()
//骨架显示
const listShow = () => {
	isLoad.value = true
}

//搜索骨架显示
const listSearchShow = () => {
	isLoad.value = false
}

defineExpose({
	listShow,
	listSearchShow,
})
</script>
