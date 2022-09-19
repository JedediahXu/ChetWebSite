<template>
	<Container :is-active="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
		<div class="ueditor">
			<Pcread v-if="homeJudgment === 'pc'" />
			<Mobileread v-if="homeJudgment === 'mobile'" />
			<div :class="homeJudgment === 'mobile' ? 'divider-mobile' : 'divider-pc'">
				<div id="comment"></div>
			</div>
			<br />
		</div>
	</Container>
</template>

<script lang="ts">
export default {
	name: 'Message',
}
declare const window: Window & { iDisqus: any }
</script>

<script setup lang="ts">
import Mobileread from '@/components/read/mobileread.vue'
import Pcread from '@/components/read/pcread.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { useRoute } from 'vue-router'

interface reserve {
	Id: number
	author_id: string
	cate_id: number
	content: string
	cover_img: string
	is_delete: string
	pub_date: string
	state: string
	title: string
}

// eslint-disable-next-line no-redeclare
const reserve = ref<reserve>()
const isActive = ref<number>(1)
const homeJudgment = ref<string>()
homeJudgment.value = judgment()
const route = useRoute()

onActivated(() => {
	emitter.emit('searchHide', 1)
	reserve.value = JSON.parse(sessionStorage.getItem('read'))
	const Disqus = new window.iDisqus('comment', {
		forum: 'gaoyuzi',
		api: '/epi/dashboard/api',
		mode: 2,
		timeout: 6000,
		init: true,
		url: 'https://chetserenade.info/read?Id=' + route.query.id,
		title: route.query.title,
	})
})

onMounted(() => {
	window.scrollTo(0, 0)
	emitter.emit('searchHide', 1)
	const Disqus = new window.iDisqus('comment', {
		forum: 'gaoyuzi',
		api: '/epi/dashboard/api',
		mode: 2,
		timeout: 6000,
		init: true,
		url: 'https://chetserenade.info/read?Id=' + route.query.id,
		title: route.query.title,
	})
})
</script>

<style lang="scss" scoped>
.divider-mobile {
	padding: 0;
	margin-top: 20px;
}

.divider-pc {
	margin-top: 20px;
	padding: 1rem 8rem;
}
</style>
