/*
* @Description: Theme switch
* @Author: xuhuazhi
* @Date: 2022-06-15
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-06-15
*/
<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" class="btn gap-1 normal-case btn-ghost"><svg width="20" height="20"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
        </path>
      </svg> <span class="hidden md:inline">主题</span> <svg width="12px" height="12px"
        class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg></div>
    <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 menu-back">
      <li> <button class="btn " :class="buttonColor == 'light' ? 'buttonColor' : ''" style="background-color: #FFFFFF;"
          @click.native="theme('light')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">light</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #560DF8;"></div>
              <div class=" w-2 rounded" style="background-color: #F000B8;"></div>
              <div class=" w-2 rounded" style="background-color: #3D4451;"></div>
            </div>
          </div>
        </button></li>
      <li> <button class="btn " :class="buttonColor == 'retro' ? 'buttonColor' : ''" style="background-color: #EF9994;"
          @click.native="theme('retro')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">brow</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #A4CBB4;"></div>
              <div class=" w-2 rounded" style="background-color: #E4D9B4;"></div>
              <div class=" w-2 rounded" style="background-color: #7D7259;"></div>
            </div>
          </div>
        </button></li>
      <li> <button class="btn" :class="buttonColor == 'dark' ? 'buttonColor' : ''" style="background-color: #6419E6;"
          @click.native="theme('dark')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">dark</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #D827A9;"></div>
              <div class=" w-2 rounded" style="background-color: #2A303C;"></div>
              <div class=" w-2 rounded" style="background-color: #191D24;"></div>
            </div>
          </div>
        </button>
      </li>
      <li><button class="btn" :class="buttonColor == 'dracula' ? 'buttonColor' : ''" style="background-color: #FF79C6;"
          @click.native="theme('dracula')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">pink</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #7936DB;"></div>
              <div class=" w-2 rounded" style="background-color: #262935;"></div>
              <div class=" w-2 rounded" style="background-color: #1D283B;"></div>
            </div>
          </div>
        </button></li>
      <li><button class="btn" :class="buttonColor == 'night' ? 'buttonColor' : ''" style="background-color: #3ABFF8;"
          @click.native="theme('night')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">blue</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #A5ACF1;"></div>
              <div class=" w-2 rounded" style="background-color: #0E1729;"></div>
              <div class=" w-2 rounded" style="background-color: #2A303C;"></div>
            </div>
          </div>
        </button></li>
      <li> <button class="btn" :class="buttonColor == 'garden' ? 'buttonColor' : ''" style="background-color: #5C7F67;"
          @click.native="theme('garden')">
          <div class="col-span-5 row-span-3 row-start-1 flex gap-1 ">
            <div class="flex-grow text-sm font-bold">gree</div>
            <div class="flex flex-shrink-0 flex-wrap gap-1">
              <div class=" w-2 rounded" style="background-color: #EFFDE8;"></div>
              <div class=" w-2 rounded" style="background-color: #E9E7E7;"></div>
              <div class=" w-2 rounded" style="background-color: #5D5656;"></div>
            </div>
          </div>
        </button></li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { themeChange } from 'theme-change'
import useLanguage from '@/store/index';
const mainStore = useLanguage();

let buttonColor = ref('')
let theme = ((type: string) => {
  buttonColor.value = type
  useLanguage().setthemeColor(type); //live themeColor
  window.localStorage.setItem('theme', type)
  themeChange(false)
})


onMounted(() => {
  buttonColor.value = mainStore.themeColor  //Pick themeColor
  themeChange(false)
})

</script>

<style scoped lang="scss">
.buttonColor {
  border: 2px solid #e3e3e3;
}
</style>
