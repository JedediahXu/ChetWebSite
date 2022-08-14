/*
* @Description: 年份 （展示启用）
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="time-selection">
    <div class="container">
      <input type="checkbox" name="menu" id="menu" class="menu-toggler">
      <label for="menu" class="menu-toggler-label">选择年份</label>
      <ul class="stagger-menu">
        <li style="--i: 0" @click="staggerZero(2023)">2023</li>
        <li style="--i: 1" @click="staggerZero(2022)">2022</li>
        <li style="--i: 2" @click="staggerZero(2021)">2021</li>
        <li style="--i: 3" @click="staggerZero(2020)">2020</li>
        <li style="--i: 4" @click="staggerZero(2019)">2019</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
const staggerZero = (index: number) => {
  ElMessage({
    message: h('p', null, [
      h('span', null, '功能暂时未开发...'),
      h('i', { style: 'color: teal' }, 'd[ o_0 ]b'),
    ]),
  })
};

</script>

