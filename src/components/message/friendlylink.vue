<template>
  <div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 my-6 w-full ">
    <button class="btn  " v-for="(item, index) in dataquerylink" :key="index">
      <a :href="'https://' + item.link" target="_blank">{{ item.title }}</a>
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

<style  lang="scss">
.btn {
  margin-left: 10px;

  a {
    color: #fff;
  }
}
</style>
