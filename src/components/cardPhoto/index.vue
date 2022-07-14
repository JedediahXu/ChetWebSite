<template>
  <div class="p-3.5 type-setting">
    <ul class="medias">
      <photo-provider>
        <photo-consumer v-for="src in listPhoto" :intro="src.img" :key="src" :src="src.img">
          <li class="media">
            <div class="mask"><span class="icon"><i class="iconfont icon-chakan"></i></span></div>
            <div data-background-image={{src.img}} data-loaded="true" class="background loaded"
              :style="{ backgroundImage: 'url(' + src.img + ')' }">
            </div>
          </li>
        </photo-consumer>
      </photo-provider>
    </ul>
  </div>
</template>


<script setup lang="ts">

const props = defineProps({
  listPhoto: {
    type: Array,
    default: true,
  }
})



</script>

