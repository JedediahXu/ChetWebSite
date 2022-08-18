/*
* @Description: createWebHistory
* @Author: xuhuazhi
* @Date: 2022-06-01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-18 11:26:57
*/
import Vue from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import exhibitRoutes from '@/router/modules/exhibit'
import { judgment } from '@/utils/judgment'

const path = judgment()
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import(`../pages/${path}/index/index.vue`),
        children: [
            {
                path: "/:pathMatch(.*)",
                redirect: "/home"
            },
            {
                path: "/",
                name: 'home',
                component: () => import("@/views/home.vue"),
            },
            {
                path: "/archive",
                name: 'archive',
                component: () => import("@/views/menu/pageArchive/index.vue"),
                meta: {
                    keepAlive: true,
                }
            },
            {
                path: "/about",
                name: 'about',
                component: () => import("@/views/menu/pageAbout/index.vue"),
                meta: {
                    keepAlive: true,
                }
            },
            {
                path: "/myself",
                name: 'myself',
                component: () => import("@/views/menu/pageMyself/index.vue"),
                meta: {
                    keepAlive: true,
                }
            },
            {
                path: "/message",
                name: 'message',
                component: () => import("@/views/menu/pageMessage/index.vue"),
                meta: {
                    keepAlive: true,
                }
            },
            {
                path: "/read",
                name: 'read',
                component: () => import("@/views/menu/pageRead/index.vue"),
                meta: {
                    keepAlive: false,
                }
            }
        ],
        meta: {
            keepAlive: true,
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: import('@/assets/404.vue'),
        meta: {
            keepAlive: true,
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

//埋点
router.beforeEach(async (to, from, next) => {
    if (to.path) {
        if (window._hmt) {
            window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
        }
    }
    next();
});

export default router
