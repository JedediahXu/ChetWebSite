/*
* @Description: 显示文字内容模块
* @Author: xuhuazhi
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/

<template>
  <div class="ueditor">
    <article class="prose dark:prose-invert">
      <div v-html=codeData></div>
    </article>
    <br>
  </div>
</template>
<script setup lang="ts">

let codeData = ref("<p>213asdasdaadsqw<br />\nwqdqwsdasda</p >\n<p>dqwdqwd<br />\n<strong>2132131231</strong></p >\n<h2><a id=\"_5\"></ a>你好啊</h2>\n<p><em>说请问企鹅</em></p >\n")

</script>
 

<style lang="scss" scoped>
.hljs {
  font-size: 15px;
}

.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>

