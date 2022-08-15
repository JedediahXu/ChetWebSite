<template>
  <div class="p-3.5 type-setting" v-if="homeJudgment === 'pc'">
    <ul class="medias">
      <photo-provider>
        <photo-consumer v-for="src in listPhoto" :intro="`/apis` + src.photo" :key="src" :src="`/apis` + src.photo">
          <li class="media">
            <div class="mask"><span class="icon"><i class="iconfont icon-chakan"></i></span></div>
            <div data-background-image={{src.photo}} data-loaded="true" class="background loaded"
              :style="{ backgroundImage: 'url(' + '/apis' + src.photo + ')' }">
            </div>
          </li>
        </photo-consumer>
      </photo-provider>
    </ul>
  </div>

  <div class="moblie" v-if="homeJudgment === 'mobile'">
    <div class="p-3.5  type-setting">
      <ul class="moblie-medias">
        <photo-provider>
          <photo-consumer v-for="src in listPhoto" :intro="`/apis` + src.photo" :key="src" :src="`/apis` + src.photo">
            <li class="moblie-media">
              <div class="mask"><span class="icon"><i class="iconfont icon-chakan"></i></span></div>
              <div data-background-image={{src.photo}} data-loaded="true" class="background loaded"
                :style="{ backgroundImage: 'url(' + '/apis' + src.photo + ')' }">
              </div>
            </li>
          </photo-consumer>
        </photo-provider>
      </ul>
    </div>
  </div>


</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { judgment } from '@/utils/judgment'

let homeJudgment = ref('')
const props = defineProps({
  listPhoto: {
    type: Array as PropType<any>,
    required: true,
    default: true,
  }
})

onMounted(() => {
  homeJudgment.value = judgment()
})

</script>
