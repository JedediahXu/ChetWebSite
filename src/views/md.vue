<template>
  <div class="ueditor">
    <mavon-editor class="markdown-body" codeStyle="monokai" v-html="codeData2"></mavon-editor>
    <br>
    <mavon-editor class="markdown-body" codeStyle="monokai" v-html="codeData3"></mavon-editor>
    <br>
  </div>
</template>
<script setup lang="ts">


let codeData2 = ref('')


let codeData3 = ref('')



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

