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
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { Ref } from 'vue';
const route = useRoute();

//mobile and pc
let homeJudgment = ref<string>()
homeJudgment.value = judgment()

//定义接口
interface info {
  page_num: string;
  page_size: number;
  total: number
}
interface pagination {
  page_num: number;
  page_size: number;
  page_id: number;
  text: string
}


let listArticle = ref([])
let totale = ref<info>();
let paginationData: Ref = ref<pagination>({
  page_num: 0,
  page_size: 6,
  page_id: 0,
  text: ''
})

//分页
const addlist = (() => {
  paginationData.value.page_num++
  queryArticle(paginationData.value).then((res: any) => {
    listArticle.value.push(...res.data.data)
    totale.value = { ...res.data.paging }
    totale.value.page_size = listArticle.value.length
  });
});

if (homeJudgment.value == 'pc') {
  addlist()
  emitter.on('taskPageId', function (index) {
    paginationData.value.page_id = index
    paginationData.value.page_num = 0
    listArticle.value = [];
    addlist()
  });
  //搜索
  emitter.on('searchCondition', function (index) {
    console.log('111');
    paginationData.value.text = index
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    listArticle.value = [];
    addlist()
    paginationData.value.text = ''
  });
}

if (homeJudgment.value == 'mobile') {
  let queryId: any = ref(0)
  queryId = route.query.id
  if (queryId === undefined) {
    paginationData.value.page_id = 0
  } else {
    paginationData.value.page_id = queryId
  }
  paginationData.value.page_num = 0
  listArticle.value = [];
  addlist()
  //搜索
  emitter.on('searchCondition', function (index) {
    paginationData.value.text = index
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    listArticle.value = [];
    addlist()
  });
  emitter.on('all', function () {
    paginationData.value.text = ''
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    addlist()
    listArticle.value = [];
  });
}
</script>
