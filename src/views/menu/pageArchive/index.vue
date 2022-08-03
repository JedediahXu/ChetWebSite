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
import { mallGoodsCates } from '@/api';


let getHeight = ref(1)
let homeJudgment = ref('')
let imgList: any = ref([])

onMounted(() => {
  homeJudgment.value = judgment()
  mallGoodsCates().then((res: any) => {
    imgList.value.push(...res.data.data)
  });
  console.log(imgList);
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
