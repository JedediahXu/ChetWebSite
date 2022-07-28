/*
* @Description: 照片墙
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <card :listPhoto="imgList" />
  </container>
</template>

<script setup lang="ts" name="about">
import selection from '@/components/timeSelection/timeSelection.vue'
import card from '@/components/cardPhoto/index.vue'
import { judgment } from '@/utils/judgment'

let getHeight = ref(1)
let homeJudgment = ref('')

onMounted(() => {
  homeJudgment.value = judgment()
})

let imgList = reactive([{
  title: '2022-06-24',
  img: '../../../public/static/img/about/Wechat1.jpeg'
}, {
  title: 'JavaScript',
  img: '../../../public/static/img/about/Wechat2.jpeg'
}, {
  title: 'TypeScript',
  img: '../../../public/static/img/about/Wechat3.jpeg'
},])

</script>


<style scoped>
.moblie-top-container {
  margin-top: 20px;
}

.moblie-right-container {
  padding-right: 10px;
}
</style>
