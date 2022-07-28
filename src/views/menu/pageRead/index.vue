/*
* @Description: 文章详情
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <!-- padding-right: 10px; -->
  <container :isActive="getHeight" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
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
import { judgment } from '@/utils/judgment'


let getHeight = ref(1)
const router = useRoute();
let reserve = ref()
reserve.value = JSON.parse(sessionStorage.getItem('read'))


</script>



<style scoped lang="scss" name="read">
.moblie-top-container {
  margin-top: 20px;
}

.moblie-right-container {
  padding-right: 10px;
}
</style>
