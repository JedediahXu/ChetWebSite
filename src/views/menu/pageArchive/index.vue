<template>
	<Container
		:is-active="isActive"
		:class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'"
	>
		<Archive
			v-if="homeJudgment === 'pc'"
			ref="dialogShow"
			:list-photo="listPhoto"
			@getTransfer="getTransfer"
		/>
		<MobilArchive
			v-if="homeJudgment === 'mobile'"
			ref="dialogShow"
			:list-photo="listPhoto"
			@getTransfer="getTransfer"
		/>
	</Container>
</template>

<script setup lang="ts" name="archive">
import MobilArchive from '@/components/mobile/archive/index.vue'
import Archive from '@/components/archive/index.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { mallGoodsCates } from '@/api'
const router = useRouter()

interface typePhoto {
	img: string
	name: string
	page_id: string
	text: string
	cate_photos: string
	Id: number
}

const isActive = ref<number>(1)
const homeJudgment = ref<string>()
const dialogShow = ref()
const listPhoto = ref<Array<typePhoto>>([])

//获取文章分类
onMounted(() => {
	homeJudgment.value = judgment()
	mallGoodsCates().then(res => {
		listPhoto.value.push(...res.data.data)
		setTimeout(() => {
			dialogShow.value.archiveShow()
		}, 500)
	})
})

//分类跳转
const getTransfer = (e: number) => {
	router.push({ name: 'home' })
	emitter.emit('taskTouch', 0)
	emitter.emit('taskPageId', e)
	emitter.emit('searchHide', 0)
}
</script>

<style scoped>
.moblie-right-container {
	padding-right: 10px;
}
</style>
