/*
* @Description: 专题墙
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <archive :listPhoto="imgList" />
  </container>
</template>


<script setup lang="ts">
import archive from '@/components/archive/index.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

let getHeight = ref(1)

let imgList = reactive([{
  title: 'Vue',
  img: '../../../public/static/img/vue.png'
}, {
  title: 'JavaScript',
  img: '../../../public/static/img/js.png'
}, {
  title: 'TypeScript',
  img: '../../../public/static/img/ts.png'
}, {
  title: 'Vite',
  img: '../../../public/static/img/dm.png'
}, {
  title: '数据结构',
  img: '../../../public/static/img/sjjg.png'
}, {
  title: 'Node',
  img: '../../../public/static/img/node.png'
}, {
  title: 'Webpack',
  img: '../../../public/static/img/wb.png'
}, {
  title: '我想',
  img: '../../../public/static/img/wx.png'
}])

</script>



<style scoped>
</style>
