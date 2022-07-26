<template>
  <div class="p-3.5 moblie-type-archive">
    <ul class="medias">
      <li class="media media-relative" v-for="(src, index) in listPhoto" :intro="src.img" :key="index">
        <h3 class="text-overlay">{{ src.title }}</h3>
        <div data-background-image={{src.img}} data-loaded="true" class="background loaded"
          :style="{ backgroundImage: 'url(' + src.img + ')' }">
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  listPhoto: {
    type: Array as PropType<any>,
    required: true,
    default: true,
  }
})

</script>

