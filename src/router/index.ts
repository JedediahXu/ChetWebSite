/*
* @Description: createWebHistory
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-25 11:22:13
*/
import Vue from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import exhibitRoutes from '@/router/modules/exhibit'
const ua = window.navigator.userAgent;
let isMobile = false;
if (ua.indexOf('iPhone') >= 0) isMobile = true;
if (ua.indexOf('Android') >= 0) isMobile = true;
if (ua.indexOf('iPad') >= 0) isMobile = true;
const path = isMobile ? 'mobile/' : 'pc/';


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import(`../pages/${path}index/index.vue`),
        children: [
            exhibitRoutes
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: import('@/assets/404.vue')
    }
]




const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
