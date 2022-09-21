<template>
	<Container :is-active="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
		<div v-if="homeJudgment === 'pc'" class="list-conter">
			<div>
				<Selection />
				<Carlist ref="dialogShow" :list-article="listArticle" :totale="totale" @getChili="addList" />
			</div>
		</div>
		<MobileCarlist v-if="homeJudgment === 'mobile'" ref="dialogShow" :list-article="listArticle" :totale="totale" @getChili="addList" />
	</Container>
	<input id="my-modal-4" type="checkbox" class="modal-toggle" />
</template>
<script setup lang="ts" name="home">
import { ref, Ref } from 'vue'
import Selection from '@/components/timeSelection/timeSelection.vue'
import MobileCarlist from '@/components/mobile/list/index.vue'
import Carlist from '@/components/list/index.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { queryArticle } from '@/api'

const isActive = ref<number>(1)
// mobile and pc
const homeJudgment = ref<string>()
homeJudgment.value = judgment()

interface info {
	page_num: string
	page_size: number
	total: number
}

interface pagination {
	page_num: number
	page_size: number
	page_id: number
	text: string
}

const listArticle = ref([])
const totale = ref<info>()
const dialogShow = ref()
const paginationData: Ref = ref<pagination>({
	page_num: 0,
	page_size: 6,
	page_id: 0,
	text: '',
})

// 获取数据
const addList = () => {
	paginationData.value.page_num++
	queryArticle(paginationData.value).then((res: any) => {
		listArticle.value.push(...res.data.data)
		totale.value = { ...res.data.paging }
		totale.value.page_size = listArticle.value.length
		setTimeout(() => {
			dialogShow.value.listShow()
		}, 700)
		if (res.data.data.length === 0) {
			emitter.emit('machine', { title: '春江南尽' })
		}
	})
}

if (homeJudgment.value == 'pc') {
	addList()
	emitter.on('taskPageId', function (index) {
		paginationData.value.page_id = index
		paginationData.value.page_num = 0
		listArticle.value = []
		dialogShow.value.listSearchShow()
		addList()
	})
	// 搜索
	emitter.on('searchCondition', function (index) {
		paginationData.value.text = index
		paginationData.value.page_id = 0
		paginationData.value.page_num = 0
		listArticle.value = []
		dialogShow.value.listSearchShow()
		addList()
	})
}

if (homeJudgment.value == 'mobile') {
	emitter.on('taskPageId', function (index) {
		paginationData.value.page_id = index
		paginationData.value.page_num = 0
		listArticle.value = []
		dialogShow.value.listSearchShow()
		addList()
	})
	addList()
	// 搜索
	emitter.on('searchCondition', function (index) {
		paginationData.value.text = index
		paginationData.value.page_id = 0
		paginationData.value.page_num = 0
		listArticle.value = []
		dialogShow.value.listSearchShow()
		addList()
	})

	emitter.on('all', function () {
		paginationData.value.text = ''
		paginationData.value.page_id = 0
		paginationData.value.page_num = 0
		dialogShow.value.listSearchShow()
		addList()
		listArticle.value = []
	})
}
</script>
