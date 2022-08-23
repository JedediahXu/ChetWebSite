/*
* @Description: 照片墙
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <card :listPhoto="listPhoto" ref="dialogShow" />
  </container>
</template>

<script setup lang="ts" name="about">
import card from '@/components/cardPhoto/index.vue'
import { judgment } from '@/utils/judgment'
import { queryPhoto } from '@/api';
const dialogShow = ref(null)

let isActive = ref<number>(1)
let homeJudgment = ref<string>()
let listPhoto = ref<Array<object>>()

const addPhoto = (() => {
  queryPhoto().then((res: any) => {
    listPhoto.value = res.data.data
    setTimeout(() => {
      dialogShow.value.archiveShow()
    }, 500)
  });
});
addPhoto()

onMounted(() => {
  homeJudgment.value = judgment()
})
</script>

<style scoped>
.moblie-right-container {
  padding-right: 10px;
}
</style>
