<template>
    <div class="container">
        <div class="container-left">
            <sidebar />
        </div>
        <div class="container-right">
            <div class="content">
                <top class="right-top" :class="monitor !== 0 ? 'shadow-sm' : ''" />
                <div class="right-container">
                    <!-- 主视图层级 -->
                    <router-view v-slot="{ Component }">
                        <keep-alive :include="['home', 'message', 'home', 'about', 'archive',]">
                            <component :is="Component" />
                        </keep-alive>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import top from "./top/index.vue";
import sidebar from "./sidebar/index.vue";
import { ref, onMounted } from "vue";

let monitor: any = ref(0);

onMounted(() => {
    window.addEventListener('scroll', handleScroll, true)
})


const handleScroll = (() => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    monitor.value = scrollTop
})

</script>
