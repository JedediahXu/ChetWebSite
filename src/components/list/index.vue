<template>

  <div class="article-list" v-if="isLoad">
    <div class="article-item list-item" v-for="item, index in listArticle" :key="index" @click="read(item)">
      <div class="item-background" :style="{ backgroundImage: 'url(' + item.img + ')' }">
      </div>
      <div class="item-content">
        <a class="item-thumb">
          <div class="image " :style="{ backgroundImage: 'url(' + item.img + ')' }"></div>
        </a>
        <div class="item-body">
          <div class="item-content">
            <h5 class="title"><a class="link">{{ item.title }}</a><span class="language">{{ item.language }}</span></h5>
            <p class="description" style="-webkit-box-orient:vertical;">{{ item.content }}</p>
          </div>
          <div class="item-meta"><span class="date">
              <i class="iconfont icon-icon_clock"></i>{{ item.time }}</span>
            <span class="views">
              <a>{{ item.type }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <loadmore @click="toEmits" />
  </div>

  <template v-else>
    <el-skeleton style="display: flex;margin: 10px 70px 10px 0px;padding: 20px;" v-for="item, index in listArticle"
      :key="index" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 260px; height: 156px" />
        <div style="padding: 14px;width: 100%;margin-right: 20px;" class="middle-content">
          <el-skeleton-item variant="p" style="width:20%" />
          <div>
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="margin-right: 16px" />
          </div>
          <el-skeleton-item variant="text" style="width: 30%" />
        </div>
      </template>
    </el-skeleton>
  </template>

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

