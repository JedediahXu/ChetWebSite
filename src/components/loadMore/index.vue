<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="articles">
		<button class="article-load">
			<div class="background"><span class="left"></span><span class="right"></span></div>
			<div class="content">
				<span class="left">{{ totale.page_size }} / {{ totale.total }}</span
				><span class="right">
					<span class="webfont bolder zh boldEn uppercase"> 山河入梦 </span>
					<i class="iconfont icon-loadmore"></i
				></span>
			</div>
		</button>
	</div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	totale: {
		type: Object,
		required: true,
		default: Object,
	},
})
</script>
