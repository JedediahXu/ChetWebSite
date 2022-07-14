/*
* @Description: 文章详情
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <div>
      {{ reserve.title }}
    </div>
    <div>
      {{ reserve.content }}
    </div>
    <img style="hight:400px;width: 500px;" :src=reserve.img alt="">
  </container>
</template>


<script setup lang="ts">
let getHeight = ref(1)
const router = useRoute();

let reserve = ref()

reserve.value = JSON.parse(sessionStorage.getItem('read'))




</script>


