<template>
  <div class="moblie-type-archive">
    <div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6">
      <a class="card border-2 border-base-100 card-compact bg-white/5 hover:bg-gray-300/10 
        transition-all duration-200 hover:shadow hover:-translate-y-1" v-for="(src, index) in listPhoto"
        :intro="src.img" :key="index" @click="toJump(index)">
        <figure class="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
          <img class="w-full h-auto" :src="'/apis' + src.cate_photos" alt="Vite">
        </figure>
        <div class="card-body text-center">
          <span class="text-xs">{{ src.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  listPhoto: {
    type: Array as PropType<any>,
    required: true,
    default: Array,
  }
})

//手机端分类跳转
const emits = defineEmits(['getTransfer']);
const toJump = (index: number) => {
  emits('getTransfer', index)
}


</script>

