<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" class="btn gap-1 normal-case btn-ghost" @click="select()">
			<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
				></path>
			</svg>
			<span class="hidden md:inline">主题</span>
			<svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
				<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
			</svg>
		</div>
		<ul v-if="selectTheme === false" tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 menu-back">
			<li>
				<button class="btn" :class="buttonColor == 'light' ? 'buttonColor' : ''" style="background-color: #ffffff" @click.native="theme('light')">
					<div class="col-span-5 row-span-3 row-start-1 flex gap-1">
						<div class="flex-grow text-sm font-bold">light</div>
						<div class="flex flex-shrink-0 flex-wrap gap-1">
							<div class="w-2 rounded" style="background-color: #560df8"></div>
							<div class="w-2 rounded" style="background-color: #f000b8"></div>
							<div class="w-2 rounded" style="background-color: #3d4451"></div>
						</div>
					</div>
				</button>
			</li>
			<li>
				<button class="btn" :class="buttonColor == 'dark' ? 'buttonColor' : ''" style="background-color: #6419e6" @click.native="theme('dark')">
					<div class="col-span-5 row-span-3 row-start-1 flex gap-1">
						<div class="flex-grow text-sm font-bold">dark</div>
						<div class="flex flex-shrink-0 flex-wrap gap-1">
							<div class="w-2 rounded" style="background-color: #d827a9"></div>
							<div class="w-2 rounded" style="background-color: #2a303c"></div>
							<div class="w-2 rounded" style="background-color: #191d24"></div>
						</div>
					</div>
				</button>
			</li>
			<li>
				<button class="btn" :class="buttonColor == 'dracula' ? 'buttonColor' : ''" style="background-color: #ff79c6" @click.native="theme('dracula')">
					<div class="col-span-5 row-span-3 row-start-1 flex gap-1">
						<div class="flex-grow text-sm font-bold">pink</div>
						<div class="flex flex-shrink-0 flex-wrap gap-1">
							<div class="w-2 rounded" style="background-color: #7936db"></div>
							<div class="w-2 rounded" style="background-color: #262935"></div>
							<div class="w-2 rounded" style="background-color: #1d283b"></div>
						</div>
					</div>
				</button>
			</li>
			<li>
				<button class="btn" :class="buttonColor == 'garden' ? 'buttonColor' : ''" style="background-color: #5c7f67" @click.native="theme('garden')">
					<div class="col-span-5 row-span-3 row-start-1 flex gap-1">
						<div class="flex-grow text-sm font-bold">gree</div>
						<div class="flex flex-shrink-0 flex-wrap gap-1">
							<div class="w-2 rounded" style="background-color: #effde8"></div>
							<div class="w-2 rounded" style="background-color: #e9e7e7"></div>
							<div class="w-2 rounded" style="background-color: #5d5656"></div>
						</div>
					</div>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { themeChange } from 'theme-change'
import useLanguage from '@/store/index'
const mainStore = useLanguage()

const selectTheme = ref<boolean>(false)
const buttonColor = ref<string>()
const theme = (type: string) => {
	buttonColor.value = type
	useLanguage().setthemeColor(type) //live themeColor
	window.localStorage.setItem('theme', type)
	themeChange(false)
	if (selectTheme.value === false) {
		selectTheme.value = true
	}
}

const select = () => {
	if (selectTheme.value === true) {
		selectTheme.value = false
	}
}

onMounted(() => {
	buttonColor.value = mainStore.themeColor //Pick themeColor
	themeChange(false)
})
</script>
