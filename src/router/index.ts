/*
* @Description: createWebHistory
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 22:13:56
*/
import Vue from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/pages/index/index.vue'
import exhibitRoutes from '@/router/modules/exhibit'
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Layout,
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
