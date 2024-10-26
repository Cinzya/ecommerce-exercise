import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '@/views/WishlistView.vue'
import Productlist from '@/components/Productlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':category',
          name: 'category',
          component: () => Productlist,
        },
      ],
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => WishlistView,
    },
  ],
})

export default router
