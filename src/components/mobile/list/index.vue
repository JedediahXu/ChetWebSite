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
import loadmore from '@/components/loadMore/index.vue'
const $router = useRouter();

const props = defineProps({
  listArticle: {
    type: Array,
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



<style scoped lang="scss">
.articles .list .list-item {
  margin-bottom: 1.236rem;
}

.article-item {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1.875rem;
  background: #F2F2F2;
}

.article-item .thumbnail {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}

.article-item .thumbnail .image {
  min-height: calc((100vw - 2rem)*.34);
  max-height: 12rem;
  background-size: cover;
  background-position: center;
}

.article-item .content {
  display: block;
}

.article-item .content .body {
  padding: 1rem 1rem 0.618rem;
}


.article-item .content .body .title {
  margin-top: 0;
  margin-bottom: 0.618rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

h4 {
  font-size: 16.1px;
  font-weight: 500;
  margin: 1em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  font-family: inherit;
  line-height: inherit;
}

.article-item .content .body .description {
  margin: 0;
  line-height: 2em;
  color: var(--text-secondary);
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

p {
  margin: 0 0 1em;
}

.article-item .content .meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  border-top: 1px dashed var(--module-bg-darker-3);
  overflow: hidden;
  color: var(--text-disabled);
  font-size: 12.432px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.article-item .content .meta .views {
  min-width: 4rem;
}

.article-item .content .meta .likes .article-item .content .meta .comments {
  min-width: 3em;
}
</style>
