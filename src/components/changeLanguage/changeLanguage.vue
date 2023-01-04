<template>
	<div class="dropdown dropdown-end">
		<div tabindex="0" class="btn btn-ghost gap-1 normal-case" @click="select()">
			<svg
				class="inline-block h-4 w-4 fill-current md:h-5 md:w-5"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 512 512"
			>
				<path
					d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"
				></path>
				<path
					d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"
				></path>
			</svg>
			<svg
				width="12px"
				height="12px"
				class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2048 2048"
			>
				<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
			</svg>
		</div>
		<ul
			v-if="selectlangName === false"
			tabindex="0"
			class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 menu-back"
		>
			<li @click="handleCommand('zh')">
				<button class="flex" :class="btuLanguage == 'zh' ? 'buttonColor' : ''">
					<img
						loading="lazy"
						width="20"
						height="20"
						alt="中文"
						src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1e8-1f1f3.svg"
					/>
					<span class="flex flex-1 justify-between">中文</span>
				</button>
			</li>
			<li @click="handleCommand('en')">
				<button class="flex" :class="btuLanguage == 'en' ? 'buttonColor' : ''">
					<img
						loading="lazy"
						width="20"
						height="20"
						alt="English"
						src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
					/>
					<span class="flex flex-1 justify-between">English </span>
				</button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import useLanguage from '@/store/index'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const selectlangName = ref<boolean>(false)
const langName = ref<string>()
const btuLanguage = ref<string>()
const handleCommand = (command: string) => {
	switch (command) {
		case 'zh':
			btuLanguage.value = command
			changeLanguage(command)
			break
		case 'en':
			btuLanguage.value = command
			changeLanguage(command)
			break
	}
	if (selectlangName.value === false) {
		selectlangName.value = true
	}
}

const setLanguageName = (lang: string) => {
	if (lang === undefined || lang === 'undefined' || lang === '' || lang === null || lang === 'zh') {
		langName.value = '中文'
	} else {
		langName.value = 'English'
	}
}

const language = computed(() => {
	return useLanguage().language
})

const changeLanguage = (lang: string) => {
	locale.value = lang
	useLanguage().setLanguage(lang)
	setLanguageName(lang)
}

const mainStore = useLanguage()
onMounted(() => {
	btuLanguage.value = mainStore.language
	setLanguageName(language.value)
})

const select = () => {
	if (selectlangName.value === true) {
		selectlangName.value = false
	}
}
</script>
