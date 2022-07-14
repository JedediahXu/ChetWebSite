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


<style scoped>
.basic-he {
  min-height: calc(99vh - 84px);
}

.height-ti {
  height: 100%
}
</style>
