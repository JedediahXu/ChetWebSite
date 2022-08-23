/*
* @Description: 手机端列表
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="list" v-if="isLoad">
    <div class="article-item list-item" v-for="item, index in listArticle" :key="index" @click="read(item, index + 1)">
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
            </i>
            {{ item.visitor_volume }}
          </span>
          <span class="comments">
            <i class="iconfont icon-category" data-v-70ac518a=""></i>
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
import loadmore from '@/components/loadMore/index.vue'
import { useShow } from '@/utils/useLoad'
import { updateVolume } from '@/api';
import type { PropType } from 'vue';

const $router = useRouter();
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
const read = ((item: object, id) => {
  sessionStorage.setItem('read', JSON.stringify(item))
  $router.push({ name: 'read' })
  updateVolume(id).then((res: any) => {
    console.log(res);
  });
})


let isLoad = ref<boolean>(false)
const { listArticleLoad } = useShow()
//骨架显示
const listShow = () => {
  isLoad.value = true
}

//搜索骨架显示
const listSearchShow = () => {
  isLoad.value = false
}

defineExpose({
  listShow,
  listSearchShow
})
</script>

