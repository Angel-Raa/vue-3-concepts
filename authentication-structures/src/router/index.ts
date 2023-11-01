import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/SignView.vue')
  },
  {
    path:"/firebase",
    name:"firebase",
    component:()=>import('../views/LoginFirebase.vue')
  },
  {
    path:"/social",
    name:"social",
    component:()=>import('../views/SocialLogin.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
