/*
* @Description: 暂时没有用到（之后删除）
* @Author: xuhuazhi
* @Date: 2022-08-12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-12 21:44:23
*/
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'menu',
  component: RouterView,
  children: [
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
        keepAlive: true,
      }
    }
  ]
}

export default routes
