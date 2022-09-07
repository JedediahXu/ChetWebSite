<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->

<template>
	<div class="moblie-type-archive">
		<div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-1 gap-6">
			<a
				v-for="(src, index) in listPhoto"
				v-if="isLoad"
				:key="index"
				class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1"
				:intro="src.img"
				@click="toJump(src.Id)"
			>
				<figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
					<img class="w-full h-auto" :src="'/apis' + src.cate_photos" alt="Vite" />
				</figure>
				<div class="card-body text-center">
					<span class="text-xs">{{ src.name }}</span>
				</div>
			</a>

			<template v-else>
				<el-skeleton v-for="(src, index) in listPhotoLoad" :key="index" class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1" animated>
					<template #template>
						<el-skeleton-item variant="image" class="template-height" />
					</template>
				</el-skeleton>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useShow } from '@/utils/useLoad'
import type { PropType } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	listPhoto: {
		type: Array as PropType<any>,
		required: true,
		default: Array,
	},
})

//手机端分类跳转
const emits = defineEmits(['getTransfer'])
const toJump = (index: number) => {
	if (index === 1) {
		emits('getTransfer', 0)
	} else {
		emits('getTransfer', index)
	}
}

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
