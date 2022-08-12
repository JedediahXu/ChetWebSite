/*
* @Description: 分页按钮
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="articles">
    <button class="article-load">
      <div class="background"><span class="left"></span><span class="right"></span></div>
      <div class="content"><span class="left">{{ totale.page_size }} / {{ totale.total }}</span><span class="right">
          <span class="webfont bolder zh boldEn uppercase">
            山河入梦
          </span>
          <i class="iconfont icon-xiala"></i></span>
      </div>
    </button>
  </div>
</template>


<script setup lang="ts">
import { PropType } from '@vue/runtime-core';

const props = defineProps({
  totale: {
    required: true,
    default: true,
  }
})

</script>
