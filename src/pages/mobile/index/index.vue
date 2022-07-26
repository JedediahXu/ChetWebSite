<template>
    <div class="mobile-main">
        <sidebar class="asider " :class="MenuBar == true ? 'opened' : ''" />
        <div class="main " :class="MenuBar !== false ? 'opened' : ''">
            <div :class="MenuBar !== false ? 'close-mask' : ''" @click="buttonMenuBar"></div>
            <top class="right-top mobile-right-top" @setMenuBar="setMenuBar"
                :class="monitor !== 0 ? 'shadow-sm' : ''" />
            <div class="mobile-container">
                <!-- 主视图层级 -->
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import top from "./top/index.vue";
import sidebar from "./sidebar/index.vue";

let monitor: any = ref(0);

onMounted(() => {
    window.addEventListener('scroll', handleScroll, true)
})

const handleScroll = (() => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    monitor.value = scrollTop
})

let MenuBar = ref(false)
let setMenuBar = (() => {
    if (!MenuBar.value) {
        MenuBar.value = true
    } else {
        MenuBar.value = false
    }
})

let buttonMenuBar = (() => {
    if (MenuBar.value) {
        MenuBar.value = false
    }
})

</script>
