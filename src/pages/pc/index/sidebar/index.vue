<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="sidebar-top">
		<div class="avatar mt-2.5">
			<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
				<img class="image" src="/static/img/avatar/xu.jpeg" />
			</div>
		</div>
		<div class="mt-2.5">
			<a
				class="link link-secondary"
				href="https://baike.baidu.com/item/%E5%BD%A2%E8%80%8C%E4%B8%8A%E8%80%85%E8%B0%93%E4%B9%8B%E9%81%93%E5%BD%A2%E8%80%8C%E4%B8%8B%E8%80%85%E8%B0%93%E4%B9%8B%E5%99%A8/62345932?fr=aladdin"
				target="_blank"
				>{{ t('PAGE_FREELANCER_SLOGAN') }}</a
			>
		</div>
		<ul class="menu bg-base-100 w-56 p-2 rounded-box rounded-color">
			<li class="menu-list-top" @click="pushJump(0)">
				<a :class="touch === 0 ? 'active' : ''">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					{{ t('PAGE_HOME') }}
				</a>
			</li>
			<li class="menu-list-top" @click="pushJump(1)">
				<a :class="touch === 1 ? 'active' : ''">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
					{{ t('PAGE_ARCHIVE') }}
				</a>
			</li>
			<li class="menu-list-top" @click="pushJump(2)">
				<a :class="touch === 2 ? 'active' : ''">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
					{{ t('PAGE_ABOUT') }}
				</a>
			</li>
			<li class="menu-list-top" @click="pushJump(3)">
				<a :class="touch === 3 ? 'active' : ''">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
					{{ t('PAGE_SPONSOR') }}
				</a>
			</li>
			<li id="list-comentas" class="menu-list-top" @click="pushJump(4)">
				<a :class="touch === 4 ? 'active' : ''">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					{{ t('PAGE_APP') }}
				</a>
			</li>
		</ul>
		<div class="mt-2.5">
			<div class="stats shadow">
				<div class="stat">
					<div class="stat-figure text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-8 h-8 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							></path>
						</svg>
					</div>
					<div class="stat-title">总访问量</div>
					<div class="stat-value text-primary">{{ mainStore.getTotalAmount }}</div>
					<div class="stat-desc">👋 欢迎访问,我的个人博客~</div>
				</div>
			</div>
		</div>

		<div class="stats-div">
			<div class="stats shadow"></div>
			<div class="stats shadow">
				<Listvar />
			</div>
		</div>
		<footer class="footer bg-base-200 text-base-content text-bottom">
			<div class="text-bottom-div">
				<p>
					前端开发日志Vue && TypeScript<br /><a
						href="https://beian.miit.gov.cn/#/Integrated/index"
						target="_blank"
						>鲁ICP备20030946号-2</a
					>
				</p>
			</div>
		</footer>
	</div>
</template>

<script setup lang="ts">
import Listvar from '@/components/list/listvar.vue'
import { emitter } from '@/utils/eventBus'
import useLanguage from '@/store/index'
import useIP from '@/utils/useIP'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
useIP()
const $router = useRouter()
const mainStore = useLanguage()
// const IP = localStorage.getItem('Ip')

document.onkeydown = function (event) {
	const e = event || arguments.callee.caller.arguments[0]
	if (e && e.keyCode == 123) {
		// emitter.emit('machine', { title: `${cityname.value},IP为:${IP} 的朋友,您好!如果反复操作,将会封锁您的IP`, mail: false })
		return false
	}
}

const touch = ref<unknown>(0)
emitter.on('taskTouch', e => {
	touch.value = e
})

//Routes Data
const pushJump = (index: number) => {
	touch.value = index
	sessionStorage.setItem('touch', JSON.stringify(index))
	switch (index) {
		case 0:
			emitter.emit('searchHide', 0)
			$router.push({ name: 'home' })
			break
		case 1:
			emitter.emit('searchHide', 1)
			$router.push({ name: 'archive' })
			break
		case 2:
			emitter.emit('searchHide', 1)
			$router.push({ name: 'about' })
			break
		case 3:
			emitter.emit('searchHide', 1)
			$router.push({ name: 'myself' })
			break
		case 4:
			emitter.emit('searchHide', 1)
			$router.push({ name: 'message' })
			break
	}
}
//防止从URl直接输入路由地址
const array: string = window.location.pathname
const urlJump = () => {
	switch (array) {
		case '/':
			pushJump(0)
			break
		case '/archive':
			pushJump(1)
			break
		case '/about':
			pushJump(2)
			break
		case '/myself':
			pushJump(3)
			break
		case '/message':
			pushJump(4)
			break
	}
}
urlJump()

watch(
	() => $router.currentRoute.value.path,
	newValue => {
		switch (newValue) {
			case '/':
				pushJump(0)
				break
			case '/archive':
				pushJump(1)
				break
			case '/about':
				pushJump(2)
				break
			case '/myself':
				pushJump(3)
				break
			case '/message':
				pushJump(4)
				break
		}
	},
	{ immediate: true },
)

onMounted(() => {
	//Default Routes
	const cashBack: number = JSON.parse(sessionStorage.getItem('touch') || '0')
	if (cashBack === null) {
		touch.value = 0
	} else {
		touch.value = cashBack
	}
})
</script>

<style lang="scss" scoped>
.stats-div {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.text-bottom-div {
	margin: 0 auto;
	margin-bottom: 20px;
	margin-top: 10px;
}

.image:hover {
	transform: rotate(360deg);
	transition: all linear 1s;
}
</style>
