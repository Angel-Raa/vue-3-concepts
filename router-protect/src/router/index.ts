import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: {
      requireAuth: true,
      role:'ADMIN'
    }
  },
  {
    path: '/:notFound',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next): void => {
  const { requireAuth, role } = to.meta
  //const auth = store.jwt;
  const auth = false
  if (requireAuth && !auth) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
