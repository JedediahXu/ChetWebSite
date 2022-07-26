/*
* @Description: 顶部导航
* @Author: xuhuazhi
* @Date: 2022-06-09
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-06-09
*/
<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="flex-1" style="justify-content: space-between;">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" @click="menuBar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
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
import { ElMessage } from 'element-plus'
import changeTheme from '@/components/changeTheme/changeTheme.vue';
import changeLanguage from '@/components/changeLanguage/changeLanguage.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// @ts-ignore：无法被执行的代码的错误
import { mallGoodsDetailAPI } from "@/api/index";

// let iframe = document.getElementById("mainframe");
// var iWindow = (<HTMLIFrameElement>iframe).contentWindow;
// iWindow.document.body.style.background = 'blue'

// onMounted(() => {
//   mallGoodsDetailAPI({}).then((res: any) => {
//     console.log(res, "res");
//   });
// })



let addopen = (() => {
  window.open('https://github.com/ChetSerenade', '_blank')
})


const emits = defineEmits(['setMenuBar']);
let menuBar = (() => {
  emits('setMenuBar')
})


</script>
