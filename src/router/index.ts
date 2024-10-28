import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WishlistView from '@/views/WishlistView.vue'
import Productlist from '@/components/Productlist.vue'
import ShoppingCart from '@/views/ShoppingCartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/0',
      children: [
        {
          path: ':category',
          name: 'category',
          component: Productlist,
        },
      ],
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCart,
    },
  ],
})

export default router
