<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
	<div>
		<div class="navbar bg-base-100">
			<div class="flex-1 flex-space">
				<label for="my-modal-6" class="btn btn-ghost normal-case text-xl flex-right"
					>文章订阅
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
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</label>
				<div v-show="num === 0" class="relative mr-6">
					<input
						v-model="dataSearch"
						type="text"
						placeholder="Search"
						class="input input-bordered w-80"
						@keyup.enter.native="onSearch(dataSearch)"
					/>
					<button
						class="btn btn-primary absolute top-0 right-0 rounded-l-none"
						@click="onSearch(dataSearch)"
					>
						Search
					</button>
				</div>

				<div class="dropdown dropdown-end">
					<button class="btn btn-ghost normal-case text-sm" @click="addopen">
						{{ t('CONNECT_GITHUB') }}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 w-3"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>

					<button class="btn btn-ghost normal-case text-sm">
						<a class="Link--primary" href="mailto:510374040@qq.com">{{ t('CONNECT_MAIL') }}</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 w-3"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</button>
				</div>
				<ChangeTheme />
				<ChangeLanguage />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import ChangeTheme from '@/components/changeTheme/changeTheme.vue'
import ChangeLanguage from '@/components/changeLanguage/changeLanguage.vue'
import { useI18n } from 'vue-i18n'
import { emitter } from '@/utils/eventBus'
const { t } = useI18n()

const temporarily = ref<number>()
const dataSearch = ref<string>()
const num = ref<unknown>(0)

emitter.on('searchHide', e => {
	num.value = e
})

let oldInput
const onSearch = e => {
	if (e == oldInput) {
		//禁用提交按钮
	} else {
		temporarily.value = dataSearch.value.length
		emitter.emit('searchCondition', dataSearch.value)
		oldInput = e
	}
}

const addopen = () => {
	window.open('https://github.com/ChetSerenade', '_blank')
}
</script>

<style>
.player-sm {
	height: 10px;
}

.flex-space {
	justify-content: space-between;
}

.flex-right {
	margin-right: auto;
}
</style>
