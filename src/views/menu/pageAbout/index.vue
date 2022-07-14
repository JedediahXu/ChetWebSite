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
  title: '2022-06-25',
  img: 'https://api.lorem.space/image/face?hash=3174'
}, {
  title: '2022-06-24',
  img: '../../../public/static/img/Header.jpg'
}])


</script>
