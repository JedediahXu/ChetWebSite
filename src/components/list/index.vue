/*
* @Description: 文章样式
* @Author: Chetxu
* @Date: 2022-08-12
* @LastEditors: Chetxu
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="article-list" v-if="isLoad">
    <div class="article-item list-item" v-for="item, index in listArticle" :key="index" @click="read(item, index + 1)">
      <div class="item-background" :style="{ backgroundImage: 'url(' + '/apis' + item.cover_img + ')' }">
      </div>
      <div class="item-content">
        <a class="item-thumb">
          <div class="image " :style="{ backgroundImage: 'url(' + '/apis' + item.cover_img + ')' }"></div>
        </a>
        <div class="item-body">
          <div class="item-content item-grid">
            <h5 class="title">
              <a class="link">{{ item.title }}</a>
              <span class="language">{{ item.language }}</span>
            </h5>
            <p class="description">{{ item.introduce }}</p>
          </div>
          <div class="item-meta">
            <span class="date">
              <i class="iconfont icon-clock"></i>
              {{ item.pub_date }}
            </span>
            <span class="views">
              <i class="iconfont icon-eye">
              </i>
              {{ item.visitor_volume }}
            </span>
            <span class="views">
              <i class="iconfont icon-category"></i>
              <a>{{ item.author_id }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <loadmore :totale="totale" @click="toEmits" />
  </div>

  <template v-else>
    <el-skeleton class="item-skeleton" v-for="item, index in listArticleLoad" :key="index" animated>
      <template #template>
        <el-skeleton-item variant="image" class="item-skeleton-image" />
        <div class="middle-content">
          <el-skeleton-item variant="p" class="middle-skeleton-item" />
          <div>
            <el-skeleton-item variant="text" class="middle-skeleton-right" />
            <el-skeleton-item variant="text" class="middle-skeleton-right" />
          </div>
          <el-skeleton-item variant="text" class="middle-skeleton-width" />
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

//选中文章 带着内容跳转展示
const read = ((item: object, id) => {
  sessionStorage.setItem('read', JSON.stringify(item))
  $router.push({ name: 'read' })
  updateVolume(id).then((res: any) => {
    // console.log(res);
  });
})

let isLoad = ref<boolean>(false)
const { listArticleLoad } = useShow()
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
