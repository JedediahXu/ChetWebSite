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
            展示内容区域1
          </div>
          <div class="component-left" v-show="displaySwitch === 2">
            展示内容区域2
          </div>
          <div class="component-left" v-show="displaySwitch === 3">
            展示内容区域3
          </div>
          <div class="component-left" v-show="displaySwitch === 4">
            展示内容区域4
          </div>

          <div class="component-right">
            <button class="btn btn-outline mt-4 w-40" @click="displayArea(1)"
              :class="displaySwitch == 1 ? 'btn-click-outline' : ''">Button</button>
            <button class="btn btn-outline btn-primary mt-4 w-40" @click="displayArea(2)"
              :class="displaySwitch == 2 ? 'btn-click-primary' : ''">Button</button>
            <button class="btn btn-outline btn-secondary mt-4 w-40" @click="displayArea(3)"
              :class="displaySwitch == 3 ? 'btn-click-secondary' : ''">Button</button>
            <button class="btn btn-outline btn-accent mt-4 w-40" @click="displayArea(4)"
              :class="displaySwitch == 4 ? 'btn-click' : ''">Button</button>
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
  padding: 20px;
}

.component-left {
  width: 100%;
  height: 100%;
  border: 1px solid red;
}

.component-right {
  height: 100%;
  width: 240px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
