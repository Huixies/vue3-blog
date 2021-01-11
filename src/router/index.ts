import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts/new',
    component: ()=>import('../views/NewPost.vue')
  },
  {
    path: '/posts/:id',
    component: ()=>import('../views/ShowPost.vue')
  },
  {
    path: '/posts/:id/edit',
    component: ()=>import('../views/EditPost.vue')
  },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router