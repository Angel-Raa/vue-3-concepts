import { type RouteRecordRaw, createRouter, createWebHistory, type Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    //redirect: '/post'
  },

  {
    path: '/post',
    name: 'post',
    component: () => import('../views/PostListView.vue')
  },
  {
    path: '/post/:id',
    name: 'post-detail',
    component: () => import('../views/PostDetailView.vue')
  }
]

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
