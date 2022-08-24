/*
* @Description: 背景
* @Author: Chetxu
* @Date: 2022-08-12
* @LastEditors: Chetxu
* @LastEditTime: 2022-08-12
*/
<template>
  <el-container class="basic-container">
    <el-main class="basic-container__card" :class="[isActive === 1 ? 'basic-he' : 'height-ti']">
      <slot></slot>
    </el-main>
  </el-container>
</template>


<script setup lang="ts">

const props = defineProps({
  isActive: {
    type: Number,
    default: true,
  }
})

</script>
