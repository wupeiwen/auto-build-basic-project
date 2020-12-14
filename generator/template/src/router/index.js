import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router