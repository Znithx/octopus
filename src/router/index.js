import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import BrowsingHistory from '@/views/BrowsingHistory.vue';
import MyFavorites from '@/views/MyFavorites.vue';
import MyProducts from '@/views/MyProducts.vue';

const routes = [
  {
    path: '/User',
    name: 'HomePage',
    component: HomePage,
  },
  // 你可以添加其他的路由配置
  {
    path: '/BrowsingHistory',
    name: 'BrowsingHistory',
    component: BrowsingHistory,
  },
  {
    path: '/MyFavorites',
    name: 'MyFavorites',
    component: MyFavorites,
  },
  {
    path: '/MyProducts',
    name: 'MyProducts',
    component: MyProducts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
