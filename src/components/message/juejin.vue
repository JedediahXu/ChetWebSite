<template>
  <div class=" bg-base-300 shadow-2xl" style="width: 100%;">
    <div class="article">
      <ul class="article-list">
        <li class="item">
          <span class="index" data-index="1">1</span>
          <div class="content">
            <a href="https://juejin.cn/post/7041038709906472974" target="_blank" class="title"
              @mouseenter="leave(0)">Vue3.2的setup语法糖和Hook函数 (强烈推荐)</a>
            <div class="meta">
              <span class="item date">2021-12-13</span>
              <span class="item views"><i class="iconfont icon-eye"></i> 1.3w</span>
              <span class="item comments"><i class="iconfont icon-comment"></i> 32</span>
            </div>
          </div>
        </li>
        <li class="item">
          <span class="index" data-index="2">2</span>
          <div class="content">
            <a href="https://juejin.cn/post/7032832901213323271" target="_blank" class="title"
              @mouseenter="leave(1)">[最详细的Watch介绍]- Vue3中Watch的使用详情和注意事项</a>
            <div class="meta">
              <span class="item date">2021-11-21</span>
              <span class="item views">
                <i class="iconfont icon-eye">
                </i> 748</span>
              <span class="item comments">
                <i class="iconfont icon-comment">
                </i> 2</span>
            </div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="3">3</span>
          <div class="content"><a href="https://juejin.cn/post/7031808193344831518" target="_blank" class="title"
              @mouseenter="leave(2)">2019
              Vue，从Object.defineProperty到Proxy的演变......</a>
            <div class="meta"><span class="item date">2021-11-18</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 1.3k</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 29</span></div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="4">4</span>
          <div class="content"><a href="https://juejin.cn/post/7054729782944071711" target="_blank" class="title"
              @mouseenter="leave(3)">深入理解Vue异步更新策略及 nextTick原理机制</a>
            <div class="meta"><span class="item date">2022-01-19</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 132</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 5</span></div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="5">5</span>
          <div class="content"><a href="https://juejin.cn/post/7032244693798748174" target="_blank" class="title"
              @mouseenter="leave(4)">同事使用的WebUploader而我用的ElementUpload......</a>
            <div class="meta"><span class="item date">2021-11-19</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 466</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 4</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="knight" style="width: 100%;">
    <div class="pic" style="width: 100%;height: 100%;">
      <img :src="bannerList[showNumber].img" style="height: 100%;width: 100%;">
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { queryJuejin } from '@/api';

let showNumber = ref<number>(0)
let bannerList = reactive([{
  img: '../../../public/static/img/message/dm.png'
},
{
  img: '../../../public/static/img/message/gch.png'
},
{
  img: '../../../public/static/img/message/jh.png'
},
{
  img: '../../../public/static/img/message/vue.png'
},
{
  img: '../../../public/static/img/message/wx.png'
},]
)

let leave = ((index: number) => {
  showNumber.value = index
})

// const queryListJuejin = (() => {
//   queryJuejin().then((res: any) => {
//     console.log(res);
//   })
// })
// queryListJuejin()

</script>

<style lang="scss" scoped>
.article {
  overflow: auto;
}

.article .article-list {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-bottom: 1em;
  padding-left: 3em;
  vertical-align: baseline;
}

.article .article-list>.item {
  display: flex;
  padding: 0 1rem;
  margin-bottom: 0.618rem;
  color: var(--text-darker);
}

.article .article-list>.item .index[data-index="1"] {
  background-color: #0088f5;
}

.article .article-list>.item .index[data-index="2"] {
  background-color: #4caf50b3;
}

.article .article-list>.item .index[data-index="3"] {
  background-color: #ff572299;
}

.article .article-list>.item .index[data-index="1"],
.article .article-list>.item .index[data-index="2"],
.article .article-list>.item .index[data-index="3"] {
  color: #fff;
  font-size: 9.9456px;
}

.article .article-list>.item .index {
  width: 14px;
  height: 14px;
  line-height: 14px;
  margin-top: 4px;
  display: inline-block;
  flex-shrink: 0;
  margin-right: 0.618rem;
  text-align: center;
  border-radius: 2px;
  color: var(--text-disabled);
  font-weight: 700;
  font-size: 13px;
}

.article .article-list>.item .content {
  flex-shrink: 1;
  overflow: hidden;
}

.article .article-list>.item .title {
  display: inline-block;
  max-width: 100%;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  font-size: 13.58px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.article .article-list>.item .meta {
  font-size: 12.432px;
  color: var(--text-disabled);
}

.article .article-list>.item .meta .item.date {
  margin-right: 1.236rem;
}

.article .article-list>.item .meta .item {
  display: inline-block;
}

.article .article-list>.item .meta .item.views {
  width: 5rem;
  margin-right: 0.618rem;
}

.article .article-list>.item .title:hover {
  text-decoration: none;
  border-bottom-color: initial;
}
</style>
