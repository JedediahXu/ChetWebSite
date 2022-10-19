<template>
	<Container :is-active="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
		<CardList ref="dialogShow" :list-photo="listPhoto" />
	</Container>
</template>

<script setup lang="ts" name="about">
import CardList from '@/components/cardPhoto/index.vue'
import { judgment } from '@/utils/judgment'
import { queryPhoto } from '@/api'
const dialogShow = ref()

const isActive = ref<number>(1)
const homeJudgment = ref<string>()
const listPhoto = ref<Array<object>>()

const addPhoto = () => {
	queryPhoto().then(res => {
		listPhoto.value = res.data.data
		setTimeout(() => {
			dialogShow.value.archiveShow()
		}, 500)
	})
}
addPhoto()

onMounted(() => {
	homeJudgment.value = judgment()
})
</script>

<style scoped>
.moblie-right-container {
	padding-right: 10px;
}
</style>
