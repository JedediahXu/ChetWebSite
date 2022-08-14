/*
* @Description: 显示文字内容模块 移动端
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="module margin background overflow">
    <div class="detail" id="A_article_content">
      <div class="knowledge" id="xu">
        <div class="title">
          <h2 class="text">{{ reserve.title }}</h2>
          <div class="meta"><i class="iconfont icon-t"></i>共 1100 字，需阅读 3 分钟
            <span><i class="iconfont icon-clock-outline"></i>{{ reserve.pub_date }}
            </span>
            <div role="separator" class="divider vertical default vertical" data-v-a3ed304c="">
            </div><span><i class="iconfont icon-eye"></i><span>234&nbsp;</span>次阅读</span>
          </div>
        </div>
        <section class="global-markdown-html">
          <div class="figure-wrapper">
            <figure class="image " data-status="loaded">
              <div class="placeholder error">
                <i class="iconfont icon-image-error"></i>
              </div>
              <img class="lozad loaded" onload="this.parentElement.dataset.status = 'loaded'"
                :src="'/apis' + reserve.cover_img">
            </figure>
          </div>
          <article class="prose dark:prose-invert" style="margin: 0;">
            <div v-html=reserve.content></div>
          </article>
        </section>
        <section class="global-markdown-html"></section>
      </div>
    </div>
    <div class="divider" @click="returntTop">点击回到顶部</div>
  </div>
</template>


<script setup lang="ts">

const props = defineProps({
  reserve: {
    type: Object,
    required: true,
    default: true,
  }
})

let returntTop = (() => {
  window.scrollTo(0, 0);
})

</script>
 

<style lang="scss" scoped>
.ueditor-left {
  width: 80%;
}

.hljs {
  font-size: 15px;
}

.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}


.article-page .module.overflow {
  overflow: hidden;
}

.article-page .module.background {
  border-radius: 4px;
  background-color: var(--module-bg);
  transition: background-color .25s;
}

.article-page .module.margin {
  margin-bottom: 1.236rem;
}

.article-page .module {
  position: relative;
}

.detail {
  position: relative;
  overflow: hidden;
  height: auto;
  transition: height .25s;
}

.detail .knowledge {
  user-select: text;
  position: relative;
}

.detail .knowledge .title {
  margin: 1em 0 1.5em;
  text-align: center;
}

.detail .knowledge .title .text {
  font-weight: 700;
  font-size: 19.285px;
  margin-bottom: 1rem;
}

h2 {
  font-size: 20.3px;
  font-weight: 700;
  margin: 1em 0;
}

.detail .knowledge .title .meta {
  display: inline-block;
  color: var(--text-disabled);
  font-size: 12.432px;
  user-select: none;
  line-height: 2;
}

.detail .knowledge .title .meta .iconfont {
  margin-right: 0.309rem;
}

.iconfont {
  font-size: 1em;
}

.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.detail .knowledge .title .meta .vertical {
  top: -1px;
}



.detail .knowledge .title .meta .iconfont {
  margin-right: 0.309rem;
}

.detail .knowledge .title .meta .vertical {
  top: -1px;
}



.divider.default {
  --divider-gap: 1rem;
}

.divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


.global-markdown-html {
  font-size: 14.7px;
}

main,
header,
footer,
article,
section,
aside,
details,
summary {
  margin: 0 auto;
  width: 100%;
}

.global-markdown-html .figure-wrapper {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.global-markdown-html figure.image[data-status=loaded] {
  width: auto;
}

.global-markdown-html figure.image {
  position: relative;
  border-radius: 2px;
  border: 1px solid rgb(232, 232, 232);
  text-indent: 0;
  text-align: center;
}

.global-markdown-html .figure-wrapper>figure {
  display: block;
}

.global-markdown-html figure.image .placeholder {
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.placeholder {
  color: var(--text-secondary);
}

.global-markdown-html figure.image .placeholder {
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.placeholder {
  color: var(--text-secondary);
}

.global-markdown-html figure.image[data-status=loaded] img {
  min-width: auto;
  min-height: auto;
}

.global-markdown-html figure.image img {
  display: block;
  max-width: 100%;
  padding: 0.618rem;
  color: transparent;
  cursor: pointer;
  transition: opacity .1s;
}

img {
  height: auto;
}

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

.article-page .module .divider {
  border-top: 2px dotted var(--module-bg-darker-1);
}
</style>

