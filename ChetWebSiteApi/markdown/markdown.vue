/*
* @Description: 文章列表
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <div class="list-conter">
    <div class="home">
      <mavon-editor :codeStyle="codeStyle" :toolbars="toolbars" v-model="content" :ishljs="true" ref="md"
        @change="change" />
      <el-button @click="outputENter">输出</el-button>
    </div>
  </div>
</template>


<script setup lang="ts">
import Mavon from "mavon-editor";
import 'mavon-editor/dist/css/index.css'

let content = ref("");

let test_html = ref("")
let codeStyle = ref('monokai-sublime');//主题

let toolbars = ref({
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  navigation: true, // 导航目录
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  subfield: true, // 单双栏模式
  preview: true // 预览
})

onMounted(() => {

})

let change = ((value: any, render: string) => {
  // render 为 markdown 解析后的结果
  test_html.value = render;
})

let outputENter = (() => {
  console.log(JSON.stringify(test_html.value))   //就用这个存数据库  然后进行回显即可
})

</script>
