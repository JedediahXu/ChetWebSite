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
        <img src="/static/img/avatar/chet.jpg" />
      </div>
    </div>
    <div style="margin-top: 11px;">
      <a class="link link-secondary">{{ t('PAGE_FREELANCER_SLOGAN') }}</a>
    </div>
    <ul class="menu bg-base-100 p-2 rounded-box rounded-color" style="width:90%;">
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
      <li @click="pushJump(4)" class="menu-list-top">
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
        <div class="stat" style="display: inline-block;">
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
  </div>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { emitter } from '@/utils/eventBus'
const $router = useRouter();
const { t } = useI18n();
let touch: any = ref(0);

onMounted(() => {
  //Default Routes
  let cashBack: number = JSON.parse(sessionStorage.getItem('touch') || '0')
  if (cashBack === null) {
    touch.value = 0
  } else {
    touch.value = cashBack
  }
})

//Routes Data
emitter.on('taskTouch', (e) => {
  touch.value = e
})

//Routes   searchHide effect Hidden search
const pushJump = (index: number) => {
  touch.value = index
  sessionStorage.setItem('touch', JSON.stringify(index))
  switch (index) {
    case 0:
      emitter.emit('searchHide', 0);
      $router.push({ name: 'home' })
      break;
    case 1:
      emitter.emit('searchHide', 1);
      $router.push({ name: 'archive' })
      break;
    case 2:
      emitter.emit('searchHide', 1);
      $router.push({ name: 'about' })
      break;
    case 3:
      emitter.emit('searchHide', 1);
      $router.push({ name: 'myself' })
      break;
    case 4:
      emitter.emit('searchHide', 1);
      $router.push({ name: 'message' })
      break;
  }
}

</script>
