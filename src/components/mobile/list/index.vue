<template>
  <div class="list">
    <div class="article-item list-item" v-for="item, index in listArticle" :key="index" @click="read(item)">
      <div class="thumbnail">
        <div class="image" :style="{ backgroundImage: 'url(' + item.img + ')' }">
        </div>
      </div>
      <div class="content">
        <div class="body">
          <h4 class="title"><a href="/article/209" class="link" title="知行合一">{{ item.title }}</a></h4>
          <p class="description" style="-webkit-box-orient: vertical;">{{ item.content }}</p>
        </div>
        <div class="meta">
          <span class="date">
            <i class="iconfont icon-clock">
            </i>{{ item.time }}
          </span>
          <span class="views">
            <i class="iconfont icon-eye">
            </i>
            <span>{{ item.language }}</span>
          </span>
          <span class="comments">
            <i class="iconfont icon-comment">
            </i>
            <span>{{ item.type }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  <loadmore @click="toEmits" style="margin-top: 1.25rem;" />
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
  }
})

let isLoad = ref(false)

setTimeout(() => {
  isLoad.value = true
}, 1000)

const emits = defineEmits(['getChili']);

const toEmits = () => {
  emits('getChili')
}


const read = ((index: any) => {
  sessionStorage.setItem('read', JSON.stringify(index))
  $router.push({ name: 'read' })
})

</script>

