<template>
	<Container :is-active="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
		<div class="component-body">
			<div class="component">
				<div v-if="homeJudgment === 'pc'" class="component-top">
					<div v-show="displaySwitch === 3" class="component-left">
						<ComwellKnown />
					</div>
					<div v-show="displaySwitch === 4" class="component-left component-flex">
						<MessageFriendly />
					</div>
					<div v-show="displaySwitch === 1" class="component-left knight-left">
						<Comjuejin />
					</div>
					<div v-show="displaySwitch === 2" class="component-left knight-left">
						<Comintroduce />
					</div>
					<div class="component-right">
						<button class="btn btn-outline btn-secondary mt-5 w-40" :class="displaySwitch == 1 ? 'btn-click-secondary' : ''" @click="displayArea(1)">掘金文章</button>
						<button class="btn btn-outline btn-accent mt-5 w-40" :class="displaySwitch == 2 ? 'btn-click' : ''" @click="displayArea(2)">众而周知</button>
						<button class="btn btn-outline mt-5 w-40" :class="displaySwitch == 3 ? 'btn-click-outline' : ''" @click="displayArea(3)">小站介绍</button>
						<button class="btn btn-outline btn-primary mt-5 w-40" :class="displaySwitch == 4 ? 'btn-click-primary' : ''" @click="displayArea(4)">友情链接</button>
					</div>
				</div>
				<div v-if="homeJudgment === 'mobile'" class="mobile-component-top">
					<div class="banner dark mobile mobile-banner" style="background-image: url('/static/img/message/dm.jpeg'); background-repeat: no-repeat; background-size: 100% 100%">
						<div class="content">
							<h2 class="title">留言</h2>
							<div class="description">此心光明 亦复何言</div>
						</div>
					</div>
				</div>
				<div class="divider"></div>
				<div id="comment"></div>
			</div>
		</div>
	</Container>
</template>

<script lang="ts">
export default {
	name: 'Message',
}
declare const window: Window & { iDisqus: any }
</script>

<script lang="ts" setup>
import MessageFriendly from '@/components/message/friendlylink.vue'
import Comintroduce from '@/components/message/introduce.vue'
import ComwellKnown from '@/components/message/wellknown.vue'
import Comjuejin from '@/components/message/juejin.vue'
import { judgment } from '@/utils/judgment'
const homeJudgment = ref<string>()
const isActive = ref<number>(1)

onMounted(() => {
	homeJudgment.value = judgment()
	const Disqus = new window.iDisqus('comment', {
		forum: 'gaoyuzi-cn',
		site: '/epi',
		api: '/epi/dashboard/api',
		mode: 2,
		timeout: 6000,
		init: true,
		title: '总评论',
	})
})

//切换菜单
const displaySwitch = ref(1)
const displayArea = (index: any) => {
	displaySwitch.value = index
}
</script>

<style spode lang="scss">
#comment {
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	overflow-x: hidden;
	font-size: 13px;
}

.component-body {
	height: 100%;
	width: 100%;

	.component {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.component-top {
		height: 20rem;
		overflow-x: hidden;
		font-size: 13px;
		display: flex;
		padding-bottom: 25px;
	}

	.component-left {
		width: 100%;
		height: 100%;
		margin-right: 15px;
	}

	.component-right {
		height: 100%;
		width: 240px;
		border: 0.218rem solid hsl(var(--nc));
		border-radius: 4px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.text-base > li {
		list-style-type: disc;
		line-height: 35px;
	}

	.component-link {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		line-height: 80px;
	}

	.component-link > li {
		flex: 0 0 33%;
	}

	.heros {
		width: 100%;
		place-items: center;
		background-size: cover;
		background-position: center;
	}

	.indicator {
		position: relative;
		display: auto;
		width: 100%;
	}

	.heros-bg {
		width: 100% !important;
		height: 17.77rem !important;
		background-image: url('/static/img/arch-name.jpeg') !important;
	}

	.mt-right {
		margin-right: 0.75rem;
	}

	.hero {
		display: grid;
		width: 100%;
		place-items: initial;
		background-size: cover;
		background-position: center;
	}

	.hero-overlay {
		grid-column-start: 1;
		grid-row-start: 1;
		height: 100%;
		width: 100%;
		background-color: hsl(var(--n) / var(--tw-bg-opacity));
		--tw-bg-opacity: 0.8;
	}

	.hero-left {
		margin-top: 10px;
		margin-left: 20px;
	}

	.knight-left {
		display: flex;

		.self {
			width: 50%;
			padding: 10px;
		}

		.knight {
			height: 100%;
		}

		p {
			font-size: 1.19em;
			margin-bottom: 1em;
			font-family: BrandonGrotesqueWeb-Regular, sans-serif;
		}
	}
}

.btn-click-outline {
	--tw-border-opacity: 1;
	border-color: hsl(var(--bc) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--bc) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--b1) / var(--tw-text-opacity));
}

.btn-click-primary {
	--tw-border-opacity: 1;
	border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--pc) / var(--tw-text-opacity));
}

.btn-click-secondary {
	--tw-border-opacity: 1;
	border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--sc) / var(--tw-text-opacity));
}

.btn-click {
	--tw-border-opacity: 1;
	border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
	--tw-bg-opacity: 1;
	background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
	--tw-text-opacity: 1;
	color: hsl(var(--ac) / var(--tw-text-opacity));
}

.mobile-component-top {
	height: 14rem;
	overflow-x: hidden;
	font-size: 13px;
	display: flex;
	padding-bottom: 25px;

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.banner {
		width: 100%;
	}

	.banner.mobile .title {
		font-size: 2em;
	}

	.content .title {
		font-size: 3em;
		margin-top: 0;
		color: #fff;
		margin-bottom: 2.472rem;
	}

	h2 {
		font-size: 20.3px;
		font-weight: 700;
		margin: 1em 0;
	}

	.content .description {
		font-size: 16.1px;
		font-weight: 700;
		color: #fff;
	}

	.moblie-right-container {
		padding-right: 10px;
	}
}

.grid-but {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}

.component-flex {
	display: flex;
}
</style>
