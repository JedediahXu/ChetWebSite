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
    <loadmore @click="addlist" />
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

// const props = defineProps({
//   listArticle: {
//     type: Array,
//     default: true,
//   }
// })

let isLoad = ref(false)

setTimeout(() => {
  isLoad.value = true
}, 1000)

const read = ((index: any) => {
  sessionStorage.setItem('read', JSON.stringify(index))
  $router.push({ name: 'read' })
})


let listArticle = ref([{
  title: '最古老的事',
  time: '2022-06-25',
  img: 'https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NjIzNjEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
  content: '一个人最怕不老实，青年人最可贵的是老实作风。"老实"就是不自欺欺人，做到不欺骗人家容易，不欺骗自己最难。"老实作风"就是脚踏实地，不占便宜。世界上没有便宜的事，谁想占便宜水就会吃亏。如果你问一个善于溜冰的人怎样获得成功时，他会告诉你：“跌倒了，爬起来”，这就是成功。',
  language: '中文',
  type: 'JavaScript'
},
{
  title: 'honest',
  time: '2022-06-24',
  img: 'https://i.picsum.photos/id/633/1600/900.jpg?hmac=gwN7sKvA9s1dPEWKVqXVIfMsicxaIqRh-S302_IsWIk',
  content: 'Be honest with yourself Be honest with yourself Be honest with yourself',
  language: 'English',
  type: 'Vue'
}, {
  title: 'Chinese',
  time: '2022-06-24',
  img: '../../../public/static/img/Header.jpg',
  content: '"Yes, Chinese people do like growing flowers but since (or,but because) many people live in apartments in cities it’s not easy to grow flowers although people who have a balcony, especially retired people, sometimes grow flowers on their balcony."Be honest with yourself',
  language: 'English',
  type: '抒情'
},
{
  title: '测试文章三',
  time: '2022-06-24',
  img: '../../../public/static/img/Header.jpg',
  content: '"Well, not really, no, because although (or,even though or,despite the fact that) the apartments are all modern and clean, there are very few places for children to play outside."',
  language: 'English',
  type: '记载'
},
{
  title: '测试文章三',
  time: '2022-06-24',
  img: 'https://i.picsum.photos/id/67/1600/900.jpg?hmac=1YLazb8E-NlROlXOdKruZjjIySkxZrwQk2MqrJdW-kM',

  content: 'Three years ago, my father gave me some good advice, which was very useful because it saved me from making a very unsuitable career choice."',
  language: 'English',
  type: '随笔'
}])


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


</script>


<style lang="scss" scoped>
.middle-content {
  padding: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
