<template>
  <div class=" bg-base-300 shadow-2xl">
    <div class="article">
      <ul class="article-list">
        <li class="item">
          <span class="index" data-index="1">1</span>
          <div class="content">
            <a href="/article/27" class="title" title="别他妈聊前端了">别他妈聊前端了</a>
            <div class="meta">
              <span class="item date">2017-03-24</span>
              <span class="item views"><i class="iconfont icon-eye"></i> 27.67k</span>
              <span class="item comments"><i class="iconfont icon-comment"></i> 119</span>
            </div>
          </div>
        </li>
        <li class="item">
          <span class="index" data-index="2">2</span>
          <div class="content">
            <a href="/article/48" class="title" title="实现基于 Nuxt.js 的 SSR 应用">实现基于 Nuxt.js 的
              SSR 应用</a>
            <div class="meta">
              <span class="item date">2017-04-21</span>
              <span class="item views">
                <i class="iconfont icon-eye">
                </i> 22.48k</span>
              <span class="item comments">
                <i class="iconfont icon-comment">
                </i> 72</span>
            </div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="3">3</span>
          <div class="content"><a href="/article/136" class="title" title="2019 年第一个月，我完成了这些事">2019
              年第一个月，我完成了这些事</a>
            <div class="meta"><span class="item date">2019-01-24</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 12.76k</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 53</span></div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="4">4</span>
          <div class="content"><a href="/article/94" class="title" title="这一次，我为自己招人！">这一次，我为自己招人！</a>
            <div class="meta"><span class="item date">2018-04-05</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 13.83k</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 44</span></div>
          </div>
        </li>
        <li class="item"><span class="index" data-index="5">5</span>
          <div class="content"><a href="/article/144" class="title" title="何以为家">何以为家</a>
            <div class="meta"><span class="item date">2019-04-27</span><span class="item views"><i
                  class="iconfont icon-eye"></i> 8.6k</span><span class="item comments"><i
                  class="iconfont icon-comment"></i> 43</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="knight">
    <img src="/static/img/message/preview.gif" style="width: 100%;height: 100%;">
  </div>
</template>

<script lang="ts" setup>

</script>


<style lang="scss" scoped>
.article {
  overflow: auto;
}

.article .article-list {
  list-style: none;
  padding: 0.618rem 0;
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
