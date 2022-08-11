/*
* @Description: 专题墙
* @Author: xuhuazhi  
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <archive :listPhoto="imgList" v-if="homeJudgment === 'pc'" @getTransfer="getTransfer" />
    <mobilArchive :listPhoto="imgList" v-if="homeJudgment === 'mobile'" @getTransfer="getTransfer" />
  </container>
</template>


<script setup lang="ts"  name="archive">
import archive from '@/components/archive/index.vue'
import mobilArchive from '@/components/mobile/archive/index.vue'
import { judgment } from '@/utils/judgment'
import { mallGoodsCates } from '@/api';
import { emitter } from '@/utils/eventBus'
const router = useRouter();


let getHeight = ref(1)
let homeJudgment = ref('')
let imgList: any = ref([])

onMounted(() => {
  homeJudgment.value = judgment()
  mallGoodsCates().then((res: any) => {
    imgList.value.push(...res.data.data)
  });
})

const getTransfer = ((e: number) => {
  router.push({ name: 'home', query: { id: e } });
  emitter.emit('taskTouch', 0);
  emitter.emit('taskPageId', e);
  emitter.emit('searchHide', 0);
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
