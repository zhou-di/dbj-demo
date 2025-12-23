import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
      menu: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于',
      menu: true
    }
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('@/views/Counter.vue'),
    meta: {
      title: '计数器',
      menu: true
    }
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import('@/views/Demo1.vue'),
    meta: {
      title: 'Demo 1',
      menu: true
    }
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import('@/views/Demo2.vue'),
    meta: {
      title: 'Demo 2',
      menu: true
    }
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import('@/views/Demo3.vue'),
    meta: {
      title: 'Demo 3',
      menu: true
    }
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: () => import('@/views/Demo4.vue'),
    meta: {
      title: 'Demo 4',
      menu: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

