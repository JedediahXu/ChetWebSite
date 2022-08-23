/*
* @Description: 显示文字内容模块 pc端
* @Date: 2022-08-12
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-08-12
*/
<template>
  <container :isActive="isActive" :class="judgment() === 'mobile' ? 'moblie-top-container' : 'moblie-right-container'">
    <div class="ueditor">
      <pcread :reserve="reserve" v-if="homeJudgment === 'pc'" />
      <mobileread :reserve="reserve" v-if="homeJudgment === 'mobile'" />
      <div :class="homeJudgment === 'mobile' ? 'divider-mobile' : 'divider-pc'">
        <div id="comment"></div>
      </div>
      <br>
    </div>
  </container>
</template>

<script lang="ts">
export default {
  name: "message",

};
declare const window: Window & { iDisqus: any };
</script>

<script setup lang="ts">
import mobileread from '@/components/read/mobileread.vue'
import pcread from '@/components/read/pcread.vue'
import { judgment } from '@/utils/judgment'
import { emitter } from '@/utils/eventBus'

let isActive = ref<number>(1)

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
onActivated(() => {
  emitter.emit('searchHide', 1);
  reserve.value = JSON.parse(sessionStorage.getItem('read'))
  let Disqus = new window.iDisqus('comment', {
    forum: 'gaoyuzi',
    site: '/epi',
    api: '/epi/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    url: 'http://gaoyuzi.cn/read?Id=' + reserve.value.Id,
    title: reserve.value.title
  });
})

onMounted(() => {
  window.scrollTo(0, 0);
  emitter.emit('searchHide', 1);
  let Disqus = new window.iDisqus('comment', {
    forum: 'gaoyuzi',
    site: '/epi',
    api: '/epi/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    url: 'http://gaoyuzi.cn/read?Id=' + reserve.value.Id,
    title: reserve.value.title
  });
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
