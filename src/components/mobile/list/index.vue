/*
* @Description: 手机端列表
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="list">
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
          <p class="description" v-html="item.content" style="-webkit-box-orient: vertical;"></p>
        </div>
        <div class="meta">
          <span class="date">
            <i class="iconfont icon-clock">
            </i>{{ item.pub_date }}
          </span>
          <span class="views">
            <i class="iconfont icon-eye">
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
  </div>
  <loadmore :totale="totale" @click="toEmits" style="margin-top: 1.25rem;" />
</template>


<script setup lang="ts">
import type { PropType } from 'vue';
import loadmore from '@/components/loadMore/index.vue'
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

let isLoad = ref<boolean>(false)
//骨架显示时间  暂时未添加骨架
setTimeout(() => {
  isLoad.value = true
}, 1000)

const emits = defineEmits(['getChili']);
const toEmits = () => {
  emits('getChili')
}

//选中文章
const read = ((index: any) => {
  sessionStorage.setItem('read', JSON.stringify(index))
  $router.push({ name: 'read' })
})

</script>

