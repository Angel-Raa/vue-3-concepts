import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
   
  },

  
  
];

export default routes;
