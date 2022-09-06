<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<el-container class="basic-container">
		<el-main class="basic-container__card" :class="[isActive === 1 ? 'basic-he' : 'height-ti']">
			<slot></slot>
		</el-main>
	</el-container>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	isActive: {
		type: Number,
		// eslint-disable-next-line vue/require-valid-default-prop
		default: true,
	},
})
</script>
