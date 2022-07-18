/*
* @Description: 留言板
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <div class="component-body">
      <div class="component">
        <div class="component-top">
          <div class="component-left" v-show="displaySwitch === 1">
            <div class="mt-3">
              <div class="indicator">
                <span class="indicator-item badge badge-secondary"></span>
                <div class="hero bg-base-300  h-0.5 bg-origin-border heros-bg">
                  <div class="hero-overlay "></div>
                  <div class="hero-left">
                    <div class="text-2xl">Statement &amp; FAQ</div>
                    <hr>
                    <div class="text-xl mt-3 font-bold">这是一个什么网站？</div>
                    <p class="mt-2 text-base italic">这是一个个人博客网站，用于表达博主希望表达的一切。</p>
                    <h3 class="text-xl mt-3 font-bold">这个网站的程序（模板）是如何实现的？</h3>
                    <ul class="mt-4 text-base italic bg-gradient-to-r" style="margin-left:20px;">
                      <li>前端：基于 Vue + Vite + TypeScript </li>
                      <li>服务端：基于 Node.js 的 express 程序。</li>
                      <li>管理后台：基于 React + 实现的 Web 应用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="component-left" v-show="displaySwitch === 2">
            <div class="component-link">
              <li>赵蛟的博客 <a class="link link-secondary">I'm a simple link</a></li>
              <li>终身学习<a class="link link-secondary">I'm a simple link</a></li>
              <li>前端开发 <a class="link link-secondary">I'm a simple link</a></li>
              <li>后端开发<a class="link link-secondary">I'm a simple link</a></li>
              <li>毅力小哥 <a class="link link-accent">I'm a simple link</a></li>
              <li>大厂人员 <a class="link link-accent">I'm a simple link</a></li>
              <li>业务爱好者 <a class="link link-accent">I'm a simple link</a></li>
              <li>终身学习<a class="link link-accent">I'm a simple link</a></li>
              <li>大神级别<a class="link link-primary">I'm a simple link</a></li>
              <li>最牛前端<a class="link link-primary">I'm a simple link</a></li>
              <li>无敌存在<a class="link link-primary">I'm a simple link</a></li>
              <li>源码爱好者<a class="link link-primary">I'm a simple link</a></li>
            </div>
          </div>

          <div class="component-left" v-show="displaySwitch === 3">
            统计数据模板后续添加
          </div>

          <div class="component-left" v-show="displaySwitch === 4">
            站长介绍站自我介绍
          </div>

          <div class="component-right">
            <button class="btn btn-outline mt-5 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click-outline' : ''">众而周知</button>
            <button class="btn btn-outline btn-primary mt-5 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click-primary' : ''">友情链接</button>
            <button class="btn btn-outline btn-secondary mt-5 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-secondary' : ''">统计数据</button>
            <button class="btn btn-outline btn-accent mt-5 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click' : ''">站长介绍</button>
          </div>
        </div>

        <div class="divider"></div>
        <div id="comment"></div>
      </div>
    </div>
  </container>
</template>


<script setup lang="ts">
let getHeight = ref(1)


/* onMounted(() => {
  let dis = new iDisqus('comment', {
    forum: 'gaoyuzi-cn',
    site: 'https://epiphanys.me',
    api: 'https://epiphanys.me/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    title: '总评论'
  });
}); */

let displaySwitch = ref(1)
let displayArea = (index: any) => {
  displaySwitch.value = index
}

</script>


<style spode lang="scss">
#comment {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  font-size: 13px;
}

.btn-click-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--b1) / var(--tw-text-opacity));
}

.btn-click-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}

.btn-click-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}

.btn-click {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}

.component-body {
  height: 100%;
  width: 100%;
}

.component {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.component-top {
  height: 20rem;
  overflow-x: hidden;
  font-size: 13px;
  display: flex;
  padding-bottom: 25px;
}

.component-left {
  width: 100%;
  height: 100%;
  margin-right: 5px;
}

.component-right {
  height: 100%;
  width: 240px;
  border: 0.218rem solid hsl(var(--nc));
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-base>li {
  list-style-type: disc;
  line-height: 35px;
}

.component-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  line-height: 80px;
}

.component-link>li {
  flex: 0 0 24%;
}

.heros {
  width: 100%;
  place-items: center;
  background-size: cover;
  background-position: center;
}

.heros-bg {
  width: 56rem !important;
  height: 17.77rem !important;
  background-image: url('../../../../public/static/img/arch-name.jpeg') !important;
}

.hero {
  display: grid;
  width: 100%;
  place-items: initial;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  grid-column-start: 1;
  grid-row-start: 1;
  height: 100%;
  width: 100%;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.8;
}

.hero-left {
  margin-top: 10px;
  margin-left: 20px;
}
</style>
