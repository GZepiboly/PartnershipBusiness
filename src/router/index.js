import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/o2o',
    name:'o2o',
    component: () => import('../views/oTwoo.vue')
  },
  {
    path:'/sceneMarketing',
    name:'场景营销',
    component: () => import('../views/sceneMarketing.vue')
  },
  {
    path:'/theWholeChain',
    name:'全链条',
    component: () => import('../views/theWholeChain.vue')
  },
  {
    path:'/privateTraffic',
    name:'私域流量',
    component: () => import('../views/privateTraffic.vue')
  },
  {
    path:'/articleDetails',
    name:'文章详情',
    component: () => import('../views/articleDetails.vue')
  },
  {
    path:'/contactUs',
    name:'联系我们',
    component: () => import('../views/contactUs.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
