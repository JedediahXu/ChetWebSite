/*
* @Description: 文章列表
* @Author: Chetxu
* @Date: 2022-07-11
* @LastEditors: Chetxu
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <div class="list-conter" v-if="homeJudgment === 'pc'">
      <div>
        <selection />
        <carlist :listArticle="listArticle" ref="dialogShow" :totale="totale" @getChili="addList" />
      </div>
    </div>
    <mobileCarlist v-if="homeJudgment === 'mobile'" ref="dialogShow" :listArticle="listArticle" :totale="totale"
      @getChili="addList" />
  </container>
</template>

<script setup lang="ts" name="home">
import selection from '@/components/timeSelection/timeSelection.vue'
import mobileCarlist from '@/components/mobile/list/index.vue'
import carlist from '@/components/list/index.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'
import { ElMessage } from 'element-plus'
import { queryArticle } from '@/api';
import { Ref } from 'vue';

let isActive = ref<number>(1)
//mobile and pc
let homeJudgment = ref<string>()
homeJudgment.value = judgment()

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
const dialogShow = ref()
let paginationData: Ref = ref<pagination>({
  page_num: 0,
  page_size: 6,
  page_id: 0,
  text: ''
})

//获取数据
const addList = (() => {
  paginationData.value.page_num++
  queryArticle(paginationData.value).then((res: any) => {
    listArticle.value.push(...res.data.data)
    totale.value = { ...res.data.paging }
    totale.value.page_size = listArticle.value.length
    setTimeout(() => {
      dialogShow.value.listShow()
    }, 700)
    if (res.data.data.length === 0) {
      ElMessage({
        message: h('p', null, [
          h('span', null, '山穷水尽'),
        ]),
        type: 'warning',
      })
    }
  });
});

if (homeJudgment.value == 'pc') {
  addList()
  emitter.on('taskPageId', function (index) {
    paginationData.value.page_id = index
    paginationData.value.page_num = 0
    listArticle.value = [];
    addList()
  });
  //搜索
  emitter.on('searchCondition', function (index) {
    paginationData.value.text = index
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    listArticle.value = [];
    dialogShow.value.listSearchShow()
    addList()
  });
}

if (homeJudgment.value == 'mobile') {
  emitter.on('taskPageId', function (index) {
    paginationData.value.page_id = index
    paginationData.value.page_num = 0
    listArticle.value = [];
    addList()
  });
  addList()
  //搜索
  emitter.on('searchCondition', function (index) {
    paginationData.value.text = index
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    listArticle.value = [];
    dialogShow.value.listSearchShow()
    addList()
  });

  emitter.on('all', function () {
    paginationData.value.text = ''
    paginationData.value.page_id = 0
    paginationData.value.page_num = 0
    addList()
    listArticle.value = [];
  });
}
</script>
