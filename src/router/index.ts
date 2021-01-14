import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import {useStore} from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'Home',
    component: Home
  },
  {
    path: '/posts/new',
    component: ()=>import('../views/NewPost.vue'),
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/posts/:id',
    component: ()=>import('../views/ShowPost.vue')
  },
  {
    path: '/posts/:id/edit',
    component: ()=>import('../views/EditPost.vue'),
    meta: {
      requiresAuth:true
    }
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.requiresAuth && !store.getState().loginUser.currentUserId) {
    next({name:'Home'})
  } else {
    next();
  }
})
  
  export default router