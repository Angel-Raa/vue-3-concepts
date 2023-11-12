import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'
import useAuth from '@/stores/auth'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeViews.vue'),
    meta: {
      required: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginViews.vue'),
    meta: {
      required: false
    }
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/SignViews.vue'),
    meta: {
      required: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileViews.vue'),
    meta: {
      required: true
    }
  }
]
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  const isAuth = auth.token
  if (to.meta.required && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
