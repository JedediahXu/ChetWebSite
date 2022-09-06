<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
	<div v-if="homeJudgment === 'pc'" class="p-3.5 type-setting">
		<ul class="medias">
			<PhotoProvider v-if="isLoad">
				<PhotoConsumer v-for="src in listPhoto" :key="src" :intro="`/apis` + src.photo" :src="`/apis` + src.photo">
					<li class="media">
						<div class="mask">
							<span class="icon"><i class="iconfont icon-chakan"></i></span>
						</div>
						<div data-background-image="{{src.photo}}" data-loaded="true" class="background loaded" :style="{ backgroundImage: 'url(' + '/apis' + src.thumbnail_photo + ')' }"></div>
					</li>
				</PhotoConsumer>
			</PhotoProvider>
			<template v-else>
				<el-skeleton v-for="(src, index) in listPhotoLoad" :key="index" class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1" animated>
					<template #template>
						<el-skeleton-item variant="image" class="template-height" />
					</template>
				</el-skeleton>
			</template>
		</ul>
	</div>

	<div v-if="homeJudgment === 'mobile'" class="moblie">
		<div class="type-setting">
			<ul class="moblie-medias">
				<PhotoProvider v-if="isLoad">
					<PhotoConsumer v-for="src in listPhoto" :key="src" :intro="`/apis` + src.photo" :src="`/apis` + src.photo">
						<li class="moblie-media">
							<div class="mask">
								<span class="icon"><i class="iconfont icon-chakan"></i></span>
							</div>
							<div data-background-image="{{src.photo}}" data-loaded="true" class="background loaded" :style="{ backgroundImage: 'url(' + '/apis' + src.thumbnail_photo + ')' }"></div>
						</li>
					</PhotoConsumer>
				</PhotoProvider>

				<template v-else>
					<el-skeleton v-for="(src, index) in listPhotoLoad" :key="index" class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1" animated>
						<template #template>
							<el-skeleton-item variant="image" class="template-height" />
						</template>
					</el-skeleton>
				</template>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { judgment } from '@/utils/judgment'
import { useShow } from '@/utils/useLoad'
import type { PropType } from 'vue'

const homeJudgment = ref<string>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	listPhoto: {
		type: Array as PropType<any>,
		required: true,
		default: Array,
	},
})
onMounted(() => {
	homeJudgment.value = judgment()
})

const isLoad = ref<boolean>(false)
const { listPhotoLoad } = useShow()
//骨架显示
const archiveShow = () => {
	isLoad.value = true
}
defineExpose({
	archiveShow,
})
</script>
