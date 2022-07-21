/*
* @Description: 照片墙
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <card :listPhoto="imgList" />
  </container>
</template>

<script setup lang="ts">
import selection from '@/components/timeSelection/timeSelection.vue'
import card from '@/components/cardPhoto/index.vue'

let getHeight = ref(1)

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
