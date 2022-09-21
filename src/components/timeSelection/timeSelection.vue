<template>
	<div class="time-selection">
		<div class="container">
			<input id="menu" type="checkbox" name="menu" class="menu-toggler" />
			<label for="menu" class="menu-toggler-label">选择年份</label>
			<ul class="stagger-menu">
				<li style="--i: 0" @click="staggerZero(2023)">2023</li>
				<li style="--i: 1" @click="staggerZero(2022)">2022</li>
				<li style="--i: 2" @click="staggerZero(2021)">2021</li>
				<li style="--i: 3" @click="staggerZero(2020)">2020</li>
				<li style="--i: 4" @click="staggerZero(2019)">2019</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { emitter } from '@/utils/eventBus'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const staggerZero = (index: number) => {
	emitter.emit('machine', { title: '功能暂时未开发...' })
}
</script>
