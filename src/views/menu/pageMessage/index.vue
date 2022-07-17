/*
* @Description: 留言板
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <div class="component-body">
    <div class="component">
      <div class="component-top">测试～</div>
      <div id="comment"></div>
    </div>
  </div>
</template>


<script setup lang="ts">

onMounted(() => {
  let dis = new iDisqus('comment', {
    forum: 'gaoyuzi-cn',
    site: 'https://epiphanys.me',
    api: 'https://epiphanys.me/dashboard/api',
    mode: 3,
    timeout: 3000,
    init: true,
    title: '总评论'
  });
});
</script>




<style scoped lang="scss">
.component-body {
  height: 100%;
  width: 100%;
}

// tiemselection
#comment {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  font-size: 13px;
}

.component {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.component-top {
  width: 100%;
  background-color: antiquewhite;
  height: 18rem;
  margin: 0 auto;
  overflow-x: hidden;
  font-size: 13px;
}
</style>
