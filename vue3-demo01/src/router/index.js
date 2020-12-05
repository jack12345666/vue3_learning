import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  },
  {
    path: '/test01',
    name: 'test01',
    component: () => import(/* webpackChunkName: "test" */ '../views/test01.vue')
  },
  {
    path: '/async',
    name: 'async',
    component: () => import(/* webpackChunkName: "test" */ '../views/test02.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "test" */ '../views/todo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
