import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[

    ]
  },
  {
    path: '/blogpassage',
    name: 'blogpassage',
    component: () => import('../views/blogpassage.vue')
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: () => import('../views/aboutme.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import('../views/More.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'blog',
  routes
})

export default router
