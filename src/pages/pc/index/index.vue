<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="container">
		<div class="container-left">
			<Sidebar />
		</div>
		<div class="container-right">
			<div class="content">
				<Top class="right-top" :class="monitor !== 0 ? 'shadow-sm' : ''" />
				<div class="right-container">
					<!-- 主视图层级 -->
					<router-view v-slot="{ Component }">
						<KeepAlive :include="['home', 'message', 'about', 'archive']">
							<Component :is="Component" />
						</KeepAlive>
					</router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Top from './top/index.vue'
import Sidebar from './sidebar/index.vue'
import { ref, onMounted } from 'vue'

const monitor = ref<number>(0)
const handleScroll = () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	monitor.value = scrollTop
}

//scroll
onMounted(() => {
	window.addEventListener('scroll', handleScroll, true)
})
</script>
