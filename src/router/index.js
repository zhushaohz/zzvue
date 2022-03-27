import { createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    { path: '/',component: () => import('../pages/Home.vue') },
    { path: '/about',name: 'about',component: () => import('../pages/About.vue') }
  ]
});

export default router
