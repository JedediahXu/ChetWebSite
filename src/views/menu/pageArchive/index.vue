/*
* @Description: 专题墙
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <archive :listPhoto="imgList" v-if="homeJudgment === 'pc'" />
    <mobilArchive :listPhoto="imgList" v-if="homeJudgment === 'mobile'" />
  </container>
</template>


<script setup lang="ts"  name="archive">
import archive from '@/components/archive/index.vue'
import mobilArchive from '@/components/mobile/archive/index.vue'
import { judgment } from '@/utils/judgment'

let getHeight = ref(1)
let homeJudgment = ref('')
onMounted(() => {
  homeJudgment.value = judgment()
})

let imgList = reactive([{
  title: 'Vue',
  img: '/static/img/archive/vue.png'
}, {
  title: 'JavaScript',
  img: '/static/img/archive/js.png'
}, {
  title: 'TypeScript',
  img: '/static/img/archive/ts.png'
}, {
  title: 'Vite',
  img: '/static/img/archive/dm.png'
}, {
  title: '数据结构',
  img: '/static/img/archive/sjjg.png'
}, {
  title: 'Node',
  img: '/static/img/archive/node.png'
}, {
  title: 'Webpack',
  img: '/static/img/archive/wb.png'
}, {
  title: '我想',
  img: '/static/img/archive/wx.png'
}])


</script>



<style scoped>
.moblie-top-container {
  margin-top: 20px;
}

.moblie-right-container {
  padding-right: 10px;
}
</style>
