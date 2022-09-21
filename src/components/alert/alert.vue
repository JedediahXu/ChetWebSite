<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<transition name="plus-icon">
		<div v-if="islet === true" class="alert alert-warning alert-top">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				<div style="color: #fff">{{ istitle.title }}</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
import { emitter } from '@/utils/eventBus'

//sb 写法
const istitle = ref<any>({})
const islet = ref<boolean>(false)

emitter.on('machine', data => {
	istitle.value = data
	islet.value = true
	setisTitle()
})

const setisTitle = () => {
	if (islet.value === true) {
		setTimeout(() => {
			islet.value = false
		}, 2000)
	}
}
</script>

<style lang="scss" scoped>
.alert-top {
	position: fixed;
	top: 8%;
	left: 45%;
	width: 20%;
	z-index: 9999;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	--tw-bg-opacity: 1;
	background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
	padding: 1rem;
	border-radius: var(--rounded-box, 1rem);
}

.plus-icon-enter-active {
	transition: opacity 0.5s;
}

.plus-icon-enter {
	opacity: 0;
}

.plus-icon-leave-active {
	transition: opacity 0.5s;
}

.plus-icon-leave-to {
	opacity: 0;
}
</style>
