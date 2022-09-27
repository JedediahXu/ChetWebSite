<template>
	<Container :is-active="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
		<div v-if="homeJudgment === 'pc'" class="componentMap">
			<div v-if="visible" class="hero h-0.5 bg-origin-border" style="background-image: url('static/img/avatar/arch.jpeg'); height: 23rem">
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content text-center text-neutral-content">
					<div class="max-w-md">
						<h1 class="mb-5 text-5xl font-bold">ChetSerenade</h1>
						<p class="role">Basketball Lover / Web Developer / Scavenger</p>
						<span class="webfont bolder zh boldEn mt-4">{{ t('SENTENCE') }}</span>
						<div class="socials">
							<span class="normal mt-3">
								<a class="item github" rel="external nofollow noopener" target="_blank" href="https://github.com/ChetSerenade">
									<i class="iconfont icon-github"> </i>
									<span class="text">GitHub</span>
								</a>
								<a class="item twitter" rel="external nofollow noopener" target="_blank" href="https://twitter.com/Lc0916x">
									<i class="iconfont icon-twitter"> </i>
									<span class="text">Twitter</span>
								</a>
								<a class="item instagram" rel="external nofollow noopener" target="_blank" href="">
									<i class="iconfont icon-instagram"></i>
									<span class="text">Instagram</span>
								</a>
								<a class="item youtube" rel="external nofollow noopener" target="_blank" href="https://www.youtube.com/channel/UCpdQkDyM_c2rLeFNJWc0crQ">
									<i class="iconfont icon-youtube"></i>
									<span class="text">YouTube</span>
								</a>
							</span>
						</div>
						<button class="btn btn-primary" @click="switchCV(1)">点击查看简历</button>
					</div>
				</div>
			</div>

			<div v-else class="hero h-0.5 bg-origin-border hero-height">
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="hero-content text-center text-neutral-content">
					<div class="w-16 h-10 btn-primary btn-switch rounded-sm opacity-75" @click="switchCV(2)">
						<i class="iconfont icon-prev"></i>
					</div>
					<div class="max-w-text text-left">
						<div class="text-size">Hi,以下是我的技能～🎉</div>
						<ul class="text-ul">
							<li>理解并掌握 JavaScript 核心知识及大部分 ES6 新特性,掌握 TypeScript</li>
							<li>熟练掌握 Vue 全家桶技术体系,了解 React 及相关技术栈,有完整项目实践经验</li>
							<li>掌握 Uni-app、(微信/支付宝)小程序,有移动端项目开发经验</li>
							<li>理解前端工程化,掌握 Webpack、Vite配置与构建,能够根据项目进行适度优化</li>
							<li>了解浏览器渲染、数据可视化、前端性能优化等方面知识</li>
							<li>了解 HTTP 协议,Node.js,PHP,Mysql,Linux,Shell,Jenkins,熟练使用 Git</li>
							<!-- <li style="color: hsl(var(--er));">想要了解更多点击下方微信,欢迎与我畅谈～</li> -->
						</ul>
						<div class="socials">
							<span class="mini mt-3">
								<a class="item telegram" rel="external nofollow noopener" target="_blank" href="https://telegram.org">
									<i class="iconfont icon-telegram"></i>
								</a>
								<label class="item wechat" for="my-modal-4">
									<i class="iconfont icon-wechat"></i>
								</label>
								<a class="item douban" rel="external nofollow noopener" target="_blank" href="https://www.douban.com/people/173379845/?_i=7245653SJgyqt3">
									<i class="iconfont icon-douban"></i>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Put this part before </body> tag -->
			<input id="my-modal-4" type="checkbox" class="modal-toggle" />
			<label for="my-modal-4" class="modal cursor-pointer">
				<label class="modal-box relative">
					<div class="qrcode-modal wechat">
						<div class="background"></div>
						<img class="image" src="/static/img/avatar/wechat.jpeg" />
						<span class="text">👋 &nbsp; Friend me on WeChat</span>
					</div>
				</label>
			</label>
			<TrajectoryMap />
		</div>
		<div v-if="homeJudgment === 'mobile'" class="componentMap">
			<div v-if="visible" class="hero h-0.5 bg-origin-border" style="background-image: url('static/img/avatar/arch.jpeg'); height: 23rem">
				<div class="hero-overlay bg-opacity-60"></div>
				<div class="moblie-hero-content text-center text-neutral-content moblie-content">
					<div class="max-w-md">
						<h1 class="mb-5 text-4xl font-bold font-color">ChetSerenade</h1>
						<p class="role">{{ t('SENTENCE') }}</p>
					</div>
					<div class="socials">
						<span class="moblie-normal mt-3">
							<a class="moblie-item github" rel="external nofollow noopener" target="_blank" href="https://github.com/ChetSerenade">
								<i class="iconfont icon-github"> </i>
								<span class="text">GitHub</span>
							</a>
							<a class="moblie-item twitter" rel="external nofollow noopener" target="_blank" href="https://twitter.com/Lc0916x">
								<i class="iconfont icon-twitter"> </i>
								<span class="text">Twitter</span>
							</a>
							<a class="moblie-item youtube" rel="external nofollow noopener" target="_blank" href="https://www.youtube.com/channel/UCpdQkDyM_c2rLeFNJWc0crQ">
								<i class="iconfont icon-youtube"></i>
								<span class="text">YouTube</span>
							</a>
						</span>
					</div>
					<label class="item wechat" for="my-modal-4">
						<i class="iconfont icon-quill">点击查看简历</i>
					</label>
				</div>
			</div>

			<!-- Put this part before </body> tag -->
			<input id="my-modal-4" type="checkbox" class="modal-toggle" />
			<label for="my-modal-4" class="modal cursor-pointer">
				<label class="modal-box relative">
					<div class="qrcode-modal wechat">
						<div class="background"></div>
						<span class="text-moblie-size">Hi,以下是我的技能～🎉</span>
						<ul class="text-mobile-ul text-top">
							<li>理解并掌握 JavaScript 核心知识及大部分 ES6 新特性,掌握 TypeScript</li>
							<li>熟练掌握 Vue 全家桶技术体系,了解 React 及相关技术栈,有完整项目实践经验</li>
							<li>掌握 Uni-app、(微信/支付宝)小程序,有移动端项目开发经验</li>
							<li>理解前端工程化,掌握 Webpack、Vite配置与构建,能够根据项目进行适度优化</li>
							<li>了解浏览器渲染、数据可视化、前端性能优化等方面知识</li>
							<li>了解 HTTP 协议，Node.js，PHP，Mysql，Linux，Shell，Jenkins，熟练使用Git</li>
						</ul>
					</div>
				</label>
			</label>

			<div class="arcades">
				<div class="item">
					<img draggable="false" src="/static/img/avatar/wechat.jpeg" class="image" />
				</div>
				<div class="item">
					<img draggable="false" src="/static/img/avatar/bilibili.jpeg" class="image" />
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import TrajectoryMap from '@/components/map/index.vue'
import { judgment } from '@/utils/judgment'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
window.scrollTo(0, 0)
const isActive = ref<number>(1)
const visible = ref<boolean>(true)

const homeJudgment = ref<string>()
onMounted(() => {
	homeJudgment.value = judgment()
})

const switchCV = (index: number) => {
	switch (index) {
		case 1:
			visible.value = false
			break
		case 2:
			visible.value = true
			break
	}
}
</script>

<style spode lang="scss">
.componentMap {
	p {
		margin: 10px;
	}

	.btn-switch {
		position: absolute;
		top: 11px;
		left: 13px;
	}

	.text-left {
		text-align: left;
		top: 10%;
		left: 25%;
	}

	.iconfont {
		font-size: 1.5em !important;
	}

	.text-ul {
		list-style: circle;
		margin: 0;
		padding: 0;
		font-size: 1.1rem;
		line-height: 40px;
	}

	.text-mobile-ul {
		list-style: circle;
		margin: 0;
		padding: 0;
		line-height: 25px;
	}

	.max-w-text {
		max-width: auto;
	}

	.socials {
		display: flex;
		justify-content: center;
		height: 3rem;
		margin-bottom: 1rem;
	}

	.socials .normal {
		display: inline-flex;
		align-items: center;
		margin-right: 1rem;

		& .item {
			padding: 0 1rem;
			margin-right: 1rem;
			height: 100%;
			display: inline-flex;
			align-items: center;
			border-radius: 4px;
			color: #fff;
			transition: all 0.1s;
		}

		& .item.twitter {
			background-color: #1b95e0;
		}

		& .item.github {
			background-color: #24282d;
		}

		& .item.instagram {
			opacity: 0.8;
			background: #ed4956;
			background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
		}

		& .item .iconfont {
			font-size: 16.1px;
			margin-right: 0.618rem;
		}

		& .iconfont {
			font-family: iconfont !important;
			font-size: 16px;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}

	.socials > .mini {
		display: flex;
	}

	.socials .normal .socials .normal .item {
		padding: 0 1rem;
		margin-right: 1rem;
		height: 100%;
		display: inline-flex;
		align-items: center;
		border-radius: 4px;
		color: #fff;
		transition: all 0.1s;
	}

	.socials > .mini {
		display: flex;
	}

	.socials > .mini > .item.telegram {
		background-color: #54a5dd;
	}

	.socials > .mini > .item {
		display: inline-block;
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
		margin-right: 1rem;
		text-align: center;
		border-radius: 4px;
		color: #fff;
		opacity: 0.8;
		transition: all 0.1s;
	}

	a {
		color: var(--link-color);
	}

	a {
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.socials > .mini > .item.wechat {
		background-color: #55be69;
	}

	.socials > .mini > .item.douban {
		background-color: #00b51d;
	}

	.socials .normal .item.youtube {
		margin: 0;
		background-color: #ec3323;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background: var(--item-primary);
	}

	.modal-box {
		max-width: 17rem;
		padding: 1rem;
	}
}

.moblie-right-container {
	padding-right: 10px;
}

.moblie-content {
	display: flex;
	flex-direction: column;
}

.moblie-normal {
	display: inline-flex;
	align-items: center;
}

.moblie-item {
	padding: 0 0.2rem;
	margin-right: 1rem;
	height: 100%;
	display: inline-flex;
	align-items: center;
	border-radius: 4px;
	color: #fff;
	transition: all 0.1s;

	&.twitter {
		color: #fff;
		background-color: #1b95e0;
	}

	&.github {
		color: #fff;
		background-color: #24282d;
	}

	&.youtube {
		margin: 0;
		color: #fff;
		background-color: #ec3323;
	}
}

.moblie-hero-content {
	z-index: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 80rem;
	gap: 1rem;
}

.arcades {
	margin-top: 1.236rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1.236rem;

	& .item {
		width: 100%;
		padding: 1rem;
		border-radius: 6px;
		overflow: hidden;
		background-color: #444444;
	}

	& .image {
		width: 100%;
		height: 100%;
		border-radius: 2px;
	}
}

.hero-height {
	height: 23rem;
}

.text-size {
	font-size: 1.4rem;
}

.text-moblie-size {
	font-size: 1.2rem;
}

.text-top {
	margin-top: 1px;
	font-size: 10px;
}

.font-color {
	color: #fff;
}
</style>
