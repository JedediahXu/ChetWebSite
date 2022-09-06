<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="mobile-main">
		<Sidebar class="asider" :class="MenuBar == true ? 'opened' : ''" @clickChild="clickEven" />
		<div class="main" :class="MenuBar !== false ? 'opened' : ''">
			<div :class="MenuBar !== false ? 'close-mask' : ''" @click="buttonMenuBar"></div>
			<Top class="right-top mobile-right-top" :class="monitor !== 0 ? 'shadow-sm' : ''" @setMenuBar="setMenuBar" />
			<div class="mobile-container">
				<!-- 主视图层级 -->
				<router-view v-slot="{ Component }">
					<KeepAlive :include="['home', 'message', 'about', 'archive']">
						<Component :is="Component" />
					</KeepAlive>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Top from './top/index.vue'
import Sidebar from './sidebar/index.vue'

const monitor = ref<number>(0)
//scroll
onMounted(() => {
	window.addEventListener('scroll', handleScroll, true)
})
const handleScroll = () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	monitor.value = scrollTop
}

//Menu  手机端左侧显示隐藏
const MenuBar = ref<boolean>(false)
const setMenuBar = () => {
	if (!MenuBar.value) {
		MenuBar.value = true
	} else {
		MenuBar.value = false
	}
}

const buttonMenuBar = () => {
	if (MenuBar.value) {
		MenuBar.value = false
	}
}

const clickEven = () => {
	if (MenuBar.value) {
		MenuBar.value = false
	}
}
</script>
