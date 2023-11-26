import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/stores/auth'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      require: true
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/DetailView.vue'),
    meta: {
      require: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      require: false
    }
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = auth()
  if (!store.isAuth && to.meta.require) {
    next('/login')
  } else {
    next()
  }
})

export default router
