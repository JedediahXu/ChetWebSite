/*
* @Description: Sidebar （The code needs to be optimized, and the initial completion！）
* @Author: xuhuazhi
* @Date: 2022-06-09
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-06-09
*/
<template>
  <div class="sidebar-top">
    <div class="avatar" style="margin-top: 10px;">
      <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="../../../../../public/static/img/avatar/WechatIMG.jpeg" />
      </div>
    </div>
    <div style="margin-top: 11px;">
      <a class="link link-secondary">{{ t('PAGE_FREELANCER_SLOGAN') }}</a>
    </div>
    <ul class="menu bg-base-100 w-56 p-2 rounded-box rounded-color">
      <li @click="pushJump(0)" class="menu-list-top">
        <a :class="touch === 0 ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ t('PAGE_HOME') }}
        </a>
      </li>
      <li @click="pushJump(1)" class="menu-list-top">
        <a :class="touch === 1 ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {{ t('PAGE_ARCHIVE') }}
        </a>
      </li>
      <li @click="pushJump(2)" class="menu-list-top">
        <a :class="touch === 2 ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {{ t('PAGE_ABOUT') }}
        </a>
      </li>
      <li @click="pushJump(3)" class="menu-list-top">
        <a :class="touch === 3 ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {{ t('PAGE_SPONSOR') }}
        </a>
      </li>
      <li @click="pushJump(4)" class="menu-list-top" id="list-comentas">
        <a :class="touch === 4 ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ t('PAGE_APP') }}
        </a>
      </li>
    </ul>
    <div style="margin-top: 10px;">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
              </path>
            </svg>
          </div>
          <div class="stat-title">总访问量</div>
          <div class="stat-value text-primary">1983</div>
          <div class="stat-desc">👋 欢迎访问,我的个人博客~</div>
        </div>
      </div>
    </div>
    <div id="player">
      <div class="player-left">
        <iframe frameborder="true" muted="muted" width=240 height=86
          src="//music.163.com/outchain/player?type=2&id=362998&auto=0&height=66"></iframe>
      </div>
      <div class="trigger"><i class="iconfont icon-music"></i></div>
    </div>
    <footer class="footer bg-base-200 text-base-content  text-bottom">
      <div style="margin: 0 auto;margin-bottom:20px;margin-top: 10px;">
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
          clip-rule="evenodd" class="fill-current">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
          </path>
        </svg>
        <p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p>
      </div>
    </footer>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

let touch: any = ref(0);
const $router = useRouter();

onMounted(() => {
  let cashBack: number = JSON.parse(sessionStorage.getItem('touch') || '0')
  if (cashBack === null) {
    touch.value = 0
  } else {
    touch.value = cashBack
  }
})

const pushJump = (index: number) => {
  touch.value = index
  sessionStorage.setItem('touch', JSON.stringify(index))
  switch (index) {
    case 0:
      $router.push({ name: 'home' })
      break;
    case 1:
      $router.push({ name: 'archive' })
      break;
    case 2:
      $router.push({ name: 'about' })
      break;
    case 3:
      $router.push({ name: 'myself' })
      break;
    case 4:
      $router.push({ name: 'message' })
      break;
  }
}

</script>
