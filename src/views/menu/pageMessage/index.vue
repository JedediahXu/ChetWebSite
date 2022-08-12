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

          <div class="component-left" v-show="displaySwitch === 4" style="display: flex;">
            <!-- <div class="component-link text-base">
              <p v-for="(item, index) in dataquerylink" :key="index">
                <li>{{ item.title }} <a class="link link-secondary">{{ item.link }}</a></li>
              </p>
            </div> -->
            <div class="pricing__includes__apps">
              <div class="pricing__includes__apps__app__chapter" v-for="(item, index) in dataquerylink" :key="index">
                <div class="pricing__includes__apps__app__chapter__icon">
                  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.333 16.333H9.666v2.334h12.667v-2.334ZM19 20.333H9.665v2.334h9.333v-2.334Z" fill="#fff">
                    </path>
                    <path d="m19.333 8.667 3.436.166 3.897-.166-7.333-7.334-.167 4.477.167 2.857Z" fill="#0066DA">
                    </path>
                    <path d="M22.333 12.333H9.666v2.334h12.667v-2.334Z" fill="#fff"></path>
                    <path
                      d="M19.334 8.667V1.333h-12a2 2 0 0 0-2 2v25.334a2 2 0 0 0 2 2h17.333a2 2 0 0 0 2-2v-20h-7.333Zm-.667 13.666h-8.666v-1.666h8.666v1.666Zm3.334-4H10v-1.666h12v1.666Zm0-4H10v-1.666h12v1.666Z"
                      fill="#2684FC">
                    </path>
                  </svg>
                </div>
                <a :href="'https://' + item.link" target="_blank">徐哥网站</a>
              </div>
            </div>
          </div>




          <div class="component-left" v-show="displaySwitch === 2">
          </div>
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
              <img src="/static/img/message/preview.gif" style="width: 100%;height: 100%;">
            </div>
          </div>
          <div class="component-right">
            <button class="btn btn-outline btn-accent mt-5 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click' : ''">小站介绍</button>
            <button class="btn btn-outline btn-secondary mt-5 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click-secondary' : ''">掘金文章</button>
            <button class="btn btn-outline mt-5 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-outline' : ''">众而周知</button>
            <button class="btn btn-outline btn-primary mt-5 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click-primary' : ''">友情链接</button>
          </div>
        </div>

        <div class="mobile-component-top" v-if="homeJudgment === 'mobile'">
          <div class="banner dark mobile mobile-banner"
            style="background-image: url('/static/img/list/dm.png'); background-repeat: no-repeat;background-size: 100% 100%;">
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
declare const window: Window & { iDisqus: any };
</script>

<script lang="ts" setup>
import { judgment } from '@/utils/judgment'
import { queryLink } from '@/api';
const getHeight = ref(1)
const homeJudgment = ref('')

//评论系统 （不稳定）
onMounted(() => {
  homeJudgment.value = judgment()
  let asd = new window.iDisqus('comment', {
    forum: 'gaoyuzi-cn',
    site: 'https://epiphanys.me',
    api: 'https://epiphanys.me/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    title: '总评论'
  });
});

//切换菜单
const displaySwitch = ref(1)
let displayArea = (index: any) => {
  displaySwitch.value = index
}

//友情链接
let dataquerylink: any = ref()
const dataLink = (() => {
  queryLink().then((res: any) => {
    dataquerylink.value = res.data.data
  });
});
dataLink()


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
    margin-right: 15px;
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
    background-image: url('/static/img/arch-name.jpeg') !important;
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

.pricing__includes__apps {
  column-gap: 80px;
  display: inline-flex;
  flex-direction: row;
  margin: 0 auto;
  row-gap: 22px;
  align-items: center;
  flex-wrap: wrap;
}

.pricing__includes__apps__app__chapter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
