/*
* @Description: 顶部导航
* @Author: xuhuazhi
* @Date: 2022-06-09
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-06-09
*/
<template>
  <div>
    <div class="search actived" v-if="search === 1">
      <div class="search-hide">
        <input type="text" v-model="dataSearch" @keyup.enter.native="onSearch(dataSearch)" placeholder="Search"
          class="input  w-80  h-10" />
        <span class="close" @click="hideSearch">
          <i class="iconfont icon-cancel">
          </i>
        </span>
      </div>
    </div>

    <div class="navbar bg-base-100" v-if="search !== 1">
      <div class="flex-1 navbar-flex">
        <div class="navbar-display">
          <button class="btn btn-square btn-ghost" @click="menuBar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <button v-show="num === 0" class="btn btn-sm btn-tran"
            style="border-color: transparent;background-color: transparent;" @click="displaySearch">搜索</button>
        </div>

      </div>
      <div class="flex-none gap-2">
        <changeTheme />
        <changeLanguage />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import changeTheme from '@/components/changeTheme/changeTheme.vue';
import changeLanguage from '@/components/changeLanguage/changeLanguage.vue';
import { emitter } from '@/utils/eventBus'

let oldInput: number;
let dataSearch = ref<any>()
let temporarily = ref<number>()
let num = ref<unknown>(0);
let search = ref<number>(0)

//显示搜索
emitter.on('searchHide', (e) => {
  num.value = e
})

const displaySearch = (() => {
  search.value = 1
})

const hideSearch = (() => {
  search.value = 0
  dataSearch.value = ''
  emitter.emit('all');
})

const onSearch = ((e: number) => {
  if (e == oldInput) {
    console.log('- -');
  } else {
    temporarily.value = dataSearch.value.length
    emitter.emit('searchCondition', dataSearch.value);
    oldInput = e;
  }
})

//点击按钮Menu
const emits = defineEmits(['setMenuBar']);
let menuBar = (() => {
  emits('setMenuBar')
})

let addopen = (() => {
  window.open('https://github.com/ChetSerenade', '_blank')
})
</script>
