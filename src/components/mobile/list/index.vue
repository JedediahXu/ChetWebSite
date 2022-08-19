/*
* @Description: 手机端列表
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="list" v-if="isLoad">
    <div class="article-item list-item" v-for="item, index in listArticle" :key="index" @click="read(item)">
      <div class="thumbnail">
        <div class="image" :style="{ backgroundImage: 'url(' + '/apis' + item.cover_img + ')' }">
        </div>
      </div>
      <div class="content">
        <div class="body">
          <h4 class="title">
            <a class="link">{{ item.title }}</a>
          </h4>
          <p class="description">{{ item.introduce }}</p>
        </div>
        <div class="meta">
          <span class="date">
            <i class="iconfont icon-clock">
            </i>{{ item.pub_date }}
          </span>
          <span class="views">
            <i class="iconfont icon-eye">
              999
            </i>
            <span>{{ item.language }}</span>
          </span>
          <span class="comments">
            <i class="iconfont icon-comment">
            </i>
            <span>{{ item.author_id }}</span>
          </span>
        </div>
      </div>
    </div>
    <loadmore :totale="totale" @click="toEmits" style="margin-top: 1.25rem;" />
  </div>
  <template v-else>
    <el-skeleton class="article-item list-item" v-for="item, index in listArticleLoad" :key="index" animated>
      <template #template>
        <div class="thumbnail">
          <el-skeleton-item variant="image" class="image" />
        </div>
        <div style="width: 100%;" class="middle-content">
          <el-skeleton-item variant="p" style="width:20%" />
          <el-skeleton-item variant="p" style="width:50%;margin-top: 10px;" />
          <el-skeleton-item variant="text" style="width: 100%;margin-top: 10px;" />
        </div>
      </template>
    </el-skeleton>
  </template>
</template>


<script setup lang="ts">
import type { PropType } from 'vue';
import loadmore from '@/components/loadMore/index.vue'
const $router = useRouter();
let isLoad = ref<boolean>(false)

const props = defineProps({
  listArticle: {
    type: Array as PropType<any>,
    required: true,
    default: true,
  },
  totale: {
    type: Object,
    required: true,
    default: Object,
  }
})

const emits = defineEmits(['getChili']);
const toEmits = () => {
  emits('getChili')
}

//选中文章
const read = ((index: any) => {
  sessionStorage.setItem('read', JSON.stringify(index))
  $router.push({ name: 'read' })
})

//骨架显示
const listShow = () => {
  isLoad.value = true
}

defineExpose({
  listShow
})

let listArticleLoad = ref([{
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}, {
  Id: 5,
  author_id: "ChetSerenade",
  cate_id: 2,
  content: "文章赵蛟",
  cover_img: "/uploads/e38127eb7b4c83814ab20a2219eb7ba3",
  introduce: "一句中心点",
  is_delete: "0",
  pub_date: "2022-07-19",
  state: "已发布",
  title: "标题",
}])
</script>

