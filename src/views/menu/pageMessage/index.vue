/*
* @Description: 留言板
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <div class="component-body">
      <div class="component">
        <div class="component-top" v-if="homeJudgment === 'pc'">
          <div class="component-left" v-show="displaySwitch === 3">
            <div class="mt-3  mt-right">
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
          <div class="component-left" v-show="displaySwitch === 4">
            <div class="component-link text-base">
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
          <!-- <div class="component-left" v-show="displaySwitch === 2">
          </div> -->
          <div class="component-left knight-left" v-show="displaySwitch === 1">
            <div class="self rounded bg-base-300 shadow-2xl">
              <p class="overflow-ellipsis overflow-hidden font-bold">
                A series of photo-collaged cityscapes depicting LA’
                s identity through the depiction of each of its unique habitats, Soria’s work highlights
                recognizable and iconic
              <p class="line-through"> s neighborhoods by artist and photographer
                Celebrating the city</p>
              architectural elements while documenting and preserving its history.
              </p>

              <p class="line-through">See more images from “Welcome to the Neighborhood” below.</p>
            </div>
            <div class="knight">
              <img src="../../../../public/static/img/message/preview.gif" style="width: 100%;height: 100%;">
            </div>
          </div>
          <div class="component-right">
            <button class="btn btn-outline btn-accent mt-8 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click' : ''">小站介绍</button>
            <!-- <button class="btn btn-outline btn-secondary mt-5 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click-secondary' : ''">统计数据</button> -->
            <button class="btn btn-outline mt-8 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-outline' : ''">众而周知</button>
            <button class="btn btn-outline btn-primary mt-8 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click-primary' : ''">友情链接</button>
          </div>
        </div>

        <div class="mobile-component-top" v-if="homeJudgment === 'mobile'">
          <div class="banner dark mobile mobile-banner"
            style="background-image: url('../../../../public/static/img/list/dm.png'); background-repeat: no-repeat;background-size: 100% 100%;">
            <div class="content">
              <h2 class="title">留言</h2>
              <div class="description">此心光明 亦复何言</div>
            </div>
          </div>
        </div>

        <div class="divider"></div>
        <div id="comment"></div>
      </div>
    </div>

  </container>
</template>

<script lang="ts">
export default {
  name: "message",
};
</script>


<script lang="ts" setup>
import { judgment } from '@/utils/judgment'
const getHeight = ref(1)

const homeJudgment = ref('')
onMounted(() => {
  homeJudgment.value = judgment()
  new iDisqus('comment', {
    forum: 'gaoyuzi-cn',
    site: 'https://epiphanys.me',
    api: 'https://epiphanys.me/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    title: '总评论'
  });
});



const displaySwitch = ref(1)
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

.component-body {
  height: 100%;
  width: 100%;


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
    flex: 0 0 33%;
  }

  .heros {
    width: 100%;
    place-items: center;
    background-size: cover;
    background-position: center;
  }

  .indicator {
    position: relative;
    display: auto;
    width: 100%;
  }

  .heros-bg {
    width: 100% !important;
    height: 17.77rem !important;
    background-image: url('../../../../public/static/img/arch-name.jpeg') !important;
  }

  .mt-right {
    margin-right: 0.75rem;
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

  .knight-left {
    display: flex;

    .self {
      width: 50%;
      padding: 10px;
    }

    .knight {
      height: 100%;
    }

    p {
      font-size: 1.2em;
      margin-bottom: 1em;
      font-family: BrandonGrotesqueWeb-Regular, sans-serif;
    }
  }
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

.mobile-component-top {
  height: 14rem;
  overflow-x: hidden;
  font-size: 13px;
  display: flex;
  padding-bottom: 25px;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .banner {
    width: 100%;
  }

  .banner.mobile .title {
    font-size: 2em;
  }

  .content .title {
    font-size: 3em;
    margin-top: 0;
    color: #fff;
    margin-bottom: 2.472rem;
  }

  h2 {
    font-size: 20.3px;
    font-weight: 700;
    margin: 1em 0;
  }

  .content .description {
    font-size: 16.1px;
    font-weight: 700;
    color: #fff;
  }

  .moblie-top-container {
    margin-top: 20px;
  }

  .moblie-right-container {
    padding-right: 10px;
  }
}
</style>
