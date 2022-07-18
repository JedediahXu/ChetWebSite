/*
* @Description: 留言板
* @Author: xuhuazhi
* @Date: 2022-07-11
* @LastEditors: xuhuazhi
* @LastEditTime: 2022-07-11
*/
<template>
  <container :isActive="getHeight">
    <div class="component-body">
      <div class="component">

        <div class="component-top">

          <div class="component-left" v-show="displaySwitch === 1">
            众而周知 众而周知 众而周知 众而周知
          </div>
          <div class="component-left" v-show="displaySwitch === 2">
            友情链接友情链接友情链接友情链接
          </div>
          <div class="component-left" v-show="displaySwitch === 3">
            统计数据统计数据统计数据统计数据
          </div>
          <div class="component-left" v-show="displaySwitch === 4">
            站长介绍站长介绍站长介绍站长介绍
          </div>

          <div class="component-right">
            <button class="btn btn-outline mt-5 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click-outline' : ''">众而周知</button>
            <button class="btn btn-outline btn-primary mt-5 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click-primary' : ''">友情链接</button>
            <button class="btn btn-outline btn-secondary mt-5 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-secondary' : ''">统计数据</button>
            <button class="btn btn-outline btn-accent mt-5 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click' : ''">站长介绍</button>
          </div>
        </div>

        <div class="divider"></div>
        <div id="comment"></div>
      </div>
    </div>
  </container>
</template>


<script setup lang="ts">
let getHeight = ref(1)

onMounted(() => {
  let dis = new iDisqus('comment', {
    forum: 'gaoyuzi-cn',
    site: 'https://epiphanys.me',
    api: 'https://epiphanys.me/dashboard/api',
    mode: 2,
    timeout: 6000,
    init: true,
    title: '总评论'
  });
});


let displaySwitch = ref(1)

let displayArea = (index: any) => {
  displaySwitch.value = index
}


</script>



<style scoped lang="scss">
.btn-click-outline {
  --tw-border-opacity: 1;
  border-color: hsl(var(--bc) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--bc) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--b1) / var(--tw-text-opacity));
}

.btn-click-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--pf, var(--p)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--pc) / var(--tw-text-opacity));
}


.btn-click-secondary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--sf, var(--s)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--sc) / var(--tw-text-opacity));
}

.btn-click {
  --tw-border-opacity: 1;
  border-color: hsl(var(--af, var(--a)) / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: hsl(var(--ac) / var(--tw-text-opacity));
}


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
  height: 20rem;
  overflow-x: hidden;
  font-size: 13px;
  display: flex;
  padding-bottom: 25px;
}

.component-left {
  width: 100%;
  height: 100%;
  margin-right: 5px;
}

.component-right {
  height: 100%;
  width: 240px;
  border: 0.218rem solid hsl(var(--nc));
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
