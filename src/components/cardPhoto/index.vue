<template>
  <div class="p-3.5 type-setting" v-if="homeJudgment === 'pc'">
    <ul class="medias">
      <photo-provider v-if="isLoad">
        <photo-consumer v-for="src in listPhoto" :intro="`/apis` + src.photo" :key="src" :src="`/apis` + src.photo">
          <li class="media">
            <div class="mask"><span class="icon"><i class="iconfont icon-chakan"></i></span></div>
            <div data-background-image={{src.photo}} data-loaded="true" class="background loaded"
              :style="{ backgroundImage: 'url(' + '/apis' + src.thumbnail_photo + ')' }">
            </div>
          </li>
        </photo-consumer>
      </photo-provider>
      <template v-else>
        <el-skeleton class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 
        transition-all duration-200 hover:shadow hover:-translate-y-1" v-for="(src, index) in listPhotoLoad"
          :key="index" animated>
          <template #template>
            <el-skeleton-item variant="image" style="height: 9rem" />
          </template>
        </el-skeleton>
      </template>
    </ul>
  </div>

  <div class="moblie" v-if="homeJudgment === 'mobile'">
    <div class="type-setting">
      <ul class="moblie-medias">
        <photo-provider v-if="isLoad">
          <photo-consumer v-for="src in listPhoto" :intro="`/apis` + src.photo" :key="src" :src="`/apis` + src.photo">
            <li class="moblie-media">
              <div class="mask"><span class="icon"><i class="iconfont icon-chakan"></i></span></div>
              <div data-background-image={{src.photo}} data-loaded="true" class="background loaded"
                :style="{ backgroundImage: 'url(' + '/apis' + src.thumbnail_photo + ')' }">
              </div>
            </li>
          </photo-consumer>
        </photo-provider>

        <template v-else>
          <el-skeleton class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 
        transition-all duration-200 hover:shadow hover:-translate-y-1" v-for="(src, index) in listPhotoLoad"
            :key="index" animated>
            <template #template>
              <el-skeleton-item variant="image" style="height: 9rem" />
            </template>
          </el-skeleton>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { judgment } from '@/utils/judgment'
import { useShow } from '@/utils/useLoad'
import type { PropType } from 'vue';


let homeJudgment = ref<string>()
const props = defineProps({
  listPhoto: {
    type: Array as PropType<any>,
    required: true,
    default: Array,
  }
})
onMounted(() => {
  homeJudgment.value = judgment()
})

let isLoad = ref<boolean>(false)
const { listPhotoLoad } = useShow()
//骨架显示
const archiveShow = () => {
  isLoad.value = true
}
defineExpose({
  archiveShow
})
</script>
