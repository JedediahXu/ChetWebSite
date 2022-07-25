<template>
    <div class="mobile-main">
        <sidebar class="asider " :class="MenuBar == true ? 'opened' : ''" />
        <div class="main " :class="MenuBar !== false ? 'opened' : ''">
            <div :class="MenuBar !== false ? 'close-mask' : ''" @click="buttonMenuBar"></div>
            <top class="right-top" @setMenuBar="setMenuBar" :class="monitor !== 0 ? 'shadow-sm' : ''" />
            <div>
                1111
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
    console.log(MenuBar.value);
    if (!MenuBar.value) {
        MenuBar.value = true
    } else {
        MenuBar.value = false
    }
})

let buttonMenuBar = (() => {
    console.log(MenuBar.value);
    if (MenuBar.value) {
        MenuBar.value = false
    }
})

</script>


<style lang="scss" scoped>
.mobile-main .asider {
    width: 66%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #34393d;
    transform: translate3d(-100%, 0, 0);
    transition: all .38s ease-out;
}

.mobile-main .main {
    min-height: 100vh;
    position: relative;
    transition: all .38s ease-out;
}


.mobile-main .asider.opened {
    transform: translateZ(0);
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
}

.mobile-main .main.opened {
    transform: translate3d(66%, 0, 0);
}

.mobile-main .main .close-mask {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 99999;
    background-color: var(--module-bg-translucent);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
}
</style>
