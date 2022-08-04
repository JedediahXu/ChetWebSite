/*
* @Description: 文章列表
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <div class="list-conter" v-if="homeJudgment === 'pc'">
    <div>
      <selection />
      <carlist :listArticle="listArticle" :totale="totale" @getChili="addlist" />
    </div>
  </div>
  <mobileCarlist v-if="homeJudgment === 'mobile'" :listArticle="listArticle" :totale="totale" @getChili="addlist" />
</template>


<script setup lang="ts" name="home">
import selection from '@/components/timeSelection/timeSelection.vue'
import carlist from '@/components/list/index.vue'
import mobileCarlist from '@/components/mobile/list/index.vue'
import { queryArticle } from '@/api';
import { useI18n } from 'vue-i18n';
import { judgment } from '@/utils/judgment'

const { t } = useI18n();
let getHeight = ref()

getHeight = computed(() => {
  return getHeight.value++
});

let listArticle = ref([])
let totale: any = ref('')
let array = ref({
  page_num: 0,
  page_size: 6
})

let homeJudgment = ref('')

onMounted(() => {
  homeJudgment.value = judgment()
})

//分页
const addlist = (() => {
  array.value.page_num++
  queryArticle(array.value).then((res: any) => {
    listArticle.value.push(...res.data.data)
    totale.value = { ...res.data.paging }
    console.log(totale);
    totale.value.page_size = listArticle.value.length
  });
});

addlist()





</script>
