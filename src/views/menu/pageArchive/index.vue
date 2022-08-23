/*
* @Description: 专题墙
* @Author: xuhuazhi  
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <archive :listPhoto="listPhoto" ref="dialogShow" v-if="homeJudgment === 'pc'" @getTransfer="getTransfer" />
    <mobilArchive :listPhoto="listPhoto" ref="dialogShow" v-if="homeJudgment === 'mobile'" @getTransfer="getTransfer" />
  </container>
</template>

<script setup lang="ts"  name="archive">
import mobilArchive from '@/components/mobile/archive/index.vue'
import archive from '@/components/archive/index.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { mallGoodsCates } from '@/api';
const router = useRouter();

let isActive = ref<number>(1)
let homeJudgment = ref<string>()
const dialogShow = ref(null)
let listPhoto = ref<Array<object>>([])

//获取文章分类
onMounted(() => {
  homeJudgment.value = judgment()
  mallGoodsCates().then((res: any) => {
    listPhoto.value.push(...res.data.data)
    setTimeout(() => {
      dialogShow.value.archiveShow()
    }, 500)
  });
})

//分类跳转
const getTransfer = ((e: number) => {
  router.push({ name: 'home' });
  emitter.emit('taskTouch', 0);
  emitter.emit('taskPageId', e);
  emitter.emit('searchHide', 0);
})
</script>


<style scoped>
.moblie-right-container {
  padding-right: 10px;
}
</style>
