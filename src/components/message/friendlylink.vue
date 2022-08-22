<template>
  <div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 my-6 " style="width: 100%;">
    <button class="btn  " v-for="(item, index) in dataquerylink" :key="index" style="margin-left: 10px;">
      <a :href="'https://' + item.link" target="_blank" style="color: #fff;">{{ item.title }}</a>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { queryLink } from '@/api';

//友情链接
let dataquerylink = ref<any>()
const dataLink = (() => {
  queryLink().then((res: any) => {
    dataquerylink.value = res.data.data
  });
});
dataLink()

</script>
