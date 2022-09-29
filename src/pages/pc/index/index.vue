<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="container">
		<div class="container-left">
			<Sidebar />
		</div>
		<music-chet-vue></music-chet-vue>
		<input id="my-modal-6" type="checkbox" class="modal-toggle" />
		<div class="modal modal-bottom sm:modal-middle">
			<div class="modal-box">
				<h3 class="font-bold text-lg">订阅最新文章!</h3>
				<div class="form-control mt-5">
					<label class="input-group">
						<span>Email</span>
						<input v-model="mail" type="text" placeholder="支持任何邮箱格" class="input input-bordered" />
					</label>
					<label class="label">
						<span class="label-text" style="font-size: 10px; color: red; margin-top: 10px">博主发布新文章后，将会第一时间通过邮箱的形式通知到您！</span>
					</label>
				</div>
				<div class="modal-action">
					<label for="my-modal-6" class="btn" @click="subScription(mail)">Yes!</label>
				</div>
			</div>
		</div>
		<div class="container-right">
			<div class="content">
				<Top class="right-top" :class="monitor !== 0 ? 'shadow-sm' : ''" />
				<div class="right-container">
					<!-- 主视图层级 -->
					<router-view v-slot="{ Component }">
						<KeepAlive :include="['home', 'message', 'about', 'archive']">
							<component :is="Component" />
						</KeepAlive>
					</router-view>
				</div>
			</div>
		</div>
	</div>
	<Alert />
</template>

<script setup lang="ts">
import Top from './top/index.vue'
import Sidebar from './sidebar/index.vue'
import { emitter } from '@/utils/eventBus'
import { ref, onMounted } from 'vue'
import { addeMaile } from '@/api'

const monitor = ref<number>(0)
const handleScroll = () => {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
	monitor.value = scrollTop
}

const checkEmail = mails => {
	const reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
	if (reg.test(mails)) {
		addeMaile(mails).then(res => {
			emitter.emit('machine', { title: res.data.message, mail: true })
			mail.value = null
		})
	} else {
		emitter.emit('machine', { title: '邮箱格式不对！', mail: false })
	}
}

const mail = ref<any>()
const subScription = mails => {
	checkEmail(mails)
}

//scroll
onMounted(() => {
	window.addEventListener('scroll', handleScroll, true)
})
</script>
