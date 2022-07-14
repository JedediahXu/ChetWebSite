/*
* @Description: 留言板
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <div style="color: red;">{{ t('PAGE_APP') }}</div>
    <iframe style="width: 800px;height:500px" frameborder="0" src="https://epiphanys.me/dashboard/dist/"></iframe>
  </container>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
let getHeight = ref(1)

</script>





<style scoped>
</style>
