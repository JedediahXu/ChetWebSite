/*
* @Description: 文章列表
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <div class="list-conter">
    <selection />
    <carlist :listArticle="listArticle" />
  </div>
</template>


<script setup lang="ts">
import selection from '@/components/timeSelection/timeSelection.vue'
import carlist from '@/components/list/index.vue'

import { mallGoodsDetailAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
let getHeight = ref()
getHeight = computed(() => {
  return getHeight.value++
});


let listArticle = reactive([])
onMounted(() => {
  mallGoodsDetailAPI({}).then((res: any) => {
    listArticle.push(...res.data.result)
  });
})



</script>
