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
import { emitter } from '@/utils/eventBus'
const route = useRoute();
const { t } = useI18n();

let getHeight = ref()
getHeight = computed(() => {
  return getHeight.value++
});

let homeJudgment = ref('')
homeJudgment.value = judgment()

let listArticle = ref([])
let totale: any = ref('')
let array: any = ref({
  page_num: 0,
  page_size: 6,
  page_id: 0
})

//分页
const addlist = (() => {
  array.value.page_num++
  queryArticle(array.value).then((res: any) => {
    listArticle.value.push(...res.data.data)
    totale.value = { ...res.data.paging }
    totale.value.page_size = listArticle.value.length
  });
});

if (homeJudgment.value == 'pc') {
  addlist()
  emitter.on('taskPageId', function (index) {
    array.value.page_id = index
    array.value.page_num = 0
    listArticle.value = [];
    addlist()
  });
}

if (homeJudgment.value == 'mobile') {
  let queryId: any = ref(0)
  queryId = route.query.id
  if (queryId === undefined) {
    array.value.page_id = 0
  } else {
    array.value.page_id = queryId
  }
  array.value.page_num = 0
  listArticle.value = [];
  addlist()
}

</script>
