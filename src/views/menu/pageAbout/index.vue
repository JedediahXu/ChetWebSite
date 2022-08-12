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
import card from '@/components/cardPhoto/index.vue'
import { judgment } from '@/utils/judgment'
import { queryPhoto } from '@/api';

let getHeight = ref(1)
let homeJudgment = ref('')
let imgList: any = ref()

const addPhoto = (() => {
  queryPhoto().then((res: any) => {
    imgList.value = res.data.data
  });
});
addPhoto()

onMounted(() => {
  homeJudgment.value = judgment()
})

</script>


<style scoped>
.moblie-top-container {
  margin-top: 20px;
}

.moblie-right-container {
  padding-right: 10px;
}
</style>
