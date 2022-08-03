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
      <carlist :listArticle="listArticle" @getChili="addlist" />
    </div>
  </div>
  <mobileCarlist v-if="homeJudgment === 'mobile'" :listArticle="listArticle" @getChili="addlist" />
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

let listArticle: any = ref([])

const addlist = (() => {
  let xu = [{
    title: '测试添加',
    time: '2022-07-03',
    img: 'https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjIzNjEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    content: '一个人最怕不老实，青年人最可贵的是老实作风。"老实"就是不自欺欺人，做到不欺骗人家容易，不欺骗自己最难。"老实作风"就是脚踏实地，不占便宜。世界上没有便宜的事，谁想占便宜水就会吃亏。如果你问一个善于溜冰的人怎样获得成功时，他会告诉你：“跌倒了，爬起来”，这就是成功。',
    language: '中文',
    type: 'JavaScript'
  },
  {
    title: '测试添加222',
    time: '2022-07-03',
    img: 'https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjIzNjEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    content: '一个人最怕不老实，青年人最可贵的是老实作风。"老实"就是不自欺欺人，做到不欺骗人家容易，不欺骗自己最难。"老实作风"就是脚踏实地，不占便宜。世界上没有便宜的事，谁想占便宜水就会吃亏。如果你问一个善于溜冰的人怎样获得成功时，他会告诉你：“跌倒了，爬起来”，这就是成功。',
    language: '中文',
    type: 'JavaScript'
  },
  {
    title: '测试添加33',
    time: '2022-07-03',
    img: 'https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjIzNjEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
    content: '一个人最怕不老实，青年人最可贵的是老实作风。"老实"就是不自欺欺人，做到不欺骗人家容易，不欺骗自己最难。"老实作风"就是脚踏实地，不占便宜。世界上没有便宜的事，谁想占便宜水就会吃亏。如果你问一个善于溜冰的人怎样获得成功时，他会告诉你：“跌倒了，爬起来”，这就是成功。',
    language: '中文',
    type: 'JavaScript'
  }]
  listArticle.value.push(...xu)
});


let homeJudgment = ref('')
onMounted(() => {
  homeJudgment.value = judgment()
  queryArticle().then((res: any) => {
    listArticle.value.push(...res.data.data)
  });
  console.log(listArticle.value);
})


</script>
