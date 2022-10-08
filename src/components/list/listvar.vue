<template>
	<span class="user-agent">
		<span class="os">
			<i v-if="osIconName" class="iconfont" :class="osIconName" />
			<span>{{ uaResult.result.os.name }}</span>
		</span>
		<span class="browser">
			<i v-if="browserIconName" class="iconfont" :class="browserIconName" />
			<span>{{ uaResult.result.browser.name }}</span>
		</span>
	</span>
</template>

<script lang="ts">
const osIconsNameMap = {
	'Mac OS': 'icon-apple',
	Windows: 'icon-windows',
	Android: 'icon-android',
	Ubuntu: 'icon-ubuntu',
	Linux: 'icon-linux',
	iOS: 'icon-apple',
}
const browersIconsNameMap = {
	Chrome: 'icon-chrome',
	Chromium: 'icon-chrome',
	WeChat: 'icon-wechat',
	QQ: 'icon-qq',
	Safari: 'icon-safari',
	'Mobile Safari': 'icon-safari',
	UCBrowser: 'icon-uc',
	Maxthon: 'icon-maxthon',
	Firefox: 'icon-firefox',
	IE: 'icon-ie',
	Opera: 'icon-opera',
	Edge: 'icon-edge',
}

export default {
	name: 'CommentItemUserAgent',
}
</script>

<script lang="ts" setup>
import { uaParser } from '@/utils/useDetails'
const userAgent = ref<string>('')

const uaResult = computed(() => uaParser(userAgent.value))
const osIconName = computed(() => {
	const osName = uaResult.value.result.os.name
	return osName && osIconsNameMap[osName]
})
const browserIconName = computed(() => {
	const browserName = uaResult.value.result.browser.name
	return browserName ? browersIconsNameMap[browserName] : null
})
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';
@import 'src/styles/mixins.scss';

.user-agent {
	.iconfont {
		margin-right: $xs-gap;
	}

	.os {
		margin-right: $sm-gap;
	}
}
</style>
