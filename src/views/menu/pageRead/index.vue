/*
* @Description: 显示文字内容模块 pc端
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <div class="ueditor">
    <pcread :reserve="reserve" v-if="homeJudgment === 'pc'" />
    <mobileread :reserve="reserve" v-if="homeJudgment === 'mobile'" />
    <div :class="homeJudgment === 'mobile' ? 'divider-mobile' : 'divider-pc'">
      我是评论系统！
    </div>
    <br>
  </div>
</template>


<script setup lang="ts">
import { emitter } from '@/utils/eventBus'
import { judgment } from '@/utils/judgment'
import pcread from '@/components/read/pcread.vue'
import mobileread from '@/components/read/mobileread.vue'

interface reserve {
  Id: number;
  author_id: string;
  cate_id: number;
  content: string;
  cover_img: string;
  is_delete: string;
  pub_date: string;
  state: string;
  title: string;
}

let homeJudgment = ref<string>()
homeJudgment.value = judgment()
let reserve = ref<reserve>()
reserve.value = JSON.parse(sessionStorage.getItem('read'))

onMounted(() => {
  window.scrollTo(0, 0);
  emitter.emit('searchHide', 1);
})
</script>

<style lang="scss" scoped>
.divider-mobile {
  padding: 0;
  margin-top: 20px;
}

.divider-pc {
  margin-top: 20px;
  padding: 1rem 8rem;

}
</style>
