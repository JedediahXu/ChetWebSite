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
            <comwellKnown />
          </div>

          <div class="component-left" v-show="displaySwitch === 4" style="display: flex;">
            <comlink />
          </div>

          <div class="component-left knight-left" v-show="displaySwitch === 1">
            <comjuejin />
          </div>

          <div class="component-left knight-left" v-show="displaySwitch === 2">
            <comintroduce />
          </div>

          <div class="component-right">
            <button class="btn btn-outline btn-secondary mt-5 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click-secondary' : ''">掘金文章</button>
            <button class="btn btn-outline btn-accent mt-5 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click' : ''">小站介绍</button>
            <button class="btn btn-outline mt-5 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-outline' : ''">众而周知</button>
            <button class="btn btn-outline btn-primary mt-5 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click-primary' : ''">友情链接</button>
          </div>
        </div>

        <div class="mobile-component-top" v-if="homeJudgment === 'mobile'">
          <div class="banner dark mobile mobile-banner"
            style="background-image: url('/static/img/message/dm.png'); background-repeat: no-repeat;background-size: 100% 100%;">
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
import comintroduce from '@/components/message/introduce.vue'
import comjuejin from '@/components/message/juejin.vue'
import comlink from '@/components/message/link.vue'
import comwellKnown from '@/components/message/wellknown.vue'
import { judgment } from '@/utils/judgment'
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

.grid-but {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
