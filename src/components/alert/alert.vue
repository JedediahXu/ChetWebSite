<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<transition>
		<div v-if="islet === true" class="alert-top">
			<div :class="istitle.mail == true ? 'el-message-lg' : 'el-messagecolor'" class="el-message el-message--warning is-closable" role="alert" style="top: 6%; z-index: 2005">
				<i v-if="istitle.mail === false" class="el-icon el-message__icon el-message-icon--warning">
					<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="currentColor"
							d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
						></path>
					</svg>
				</i>
				<svg v-if="istitle.mail === true" xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<p class="el-message__content">{{ istitle.title }}</p>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { emitter } from '@/utils/eventBus'

const istitle = ref<unknown>({})
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
	top: 12%;
	left: 45%;
	width: 33%;
	z-index: 9999;
	gap: 1rem;
	--tw-bg-opacity: 1;
	padding: 1rem;
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

.el-message--warning {
	// --el-message-bg-color: #fdf6ec;
	// --el-message-border-color: #faecd8;
	// --el-message-text-color: #e6a23c;
	background: var(--module-bg-opaque);
}

.el-message {
	width: fit-content;
	max-width: calc(100% - 30px);
	box-sizing: border-box;
	border-radius: var(--el-border-radius-base);
	border-width: var(--el-border-width);
	border-style: var(--el-border-style);
	border-color: var(--el-message-border-color);
	position: fixed;
	left: 50%;
	top: 12%;
	transform: translateX(-50%);
	background-color: var(--el-message-bg-color);
	transition: opacity var(--el-transition-duration), transform 0.4s, top 0.4s;
	padding: var(--el-message-padding);
	display: flex;
	align-items: center;
}

// .el-message .el-message-icon--warning {
// 	color: hsl(var(--nc));
// }

.el-message__icon {
	margin-right: 10px;
}

.el-icon {
	--color: inherit;
	height: 1em;
	width: 1.4em;
	line-height: 1em;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
	color: hsl(var(--nc));
	font-size: inherit;
}

.el-message.is-closable .el-message__content {
	padding-right: 31px;
}

.el-message--warning .el-message__content {
	overflow-wrap: anywhere;
}

.el-message p {
	margin: 0;
}

.el-message__content {
	padding: 0;
	font-size: 14px;
	line-height: 1;
}

p {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}

.el-messagecolor {
	color: hsl(var(--nc));
	--el-message-bg-color: hsl(var(--pf));
	--el-message-border-color: hsl(var(--pf));
	--el-message-padding: 0.3rem 0.7rem;
	--el-message-close-size: 16px;
	--el-message-close-icon-color: hsl(var(--pf));
}

.el-message-lg {
	color: hsl(var(--bc));
	--el-message-bg-color: hsl(var(--su));
	--el-message-border-color: hsl(var(--su));
	--el-message-padding: 0.3rem 0.7rem;
	--el-message-close-size: 16px;
	--el-message-close-icon-color: hsl(var(--bc));
}
</style>
