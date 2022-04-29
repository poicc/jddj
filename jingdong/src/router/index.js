import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/home/HomePage')
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('../views/cart/CartPage')
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: () => import('../views/order/OrderPage')
  },
  {
    path: '/personal',
    name: 'PersonalPage',
    component: () => import('../views/personal/PersonalPage')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/register/RegisterPage')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/login/LoginPage')
  },
  {
    path: '/shop/:id',
    name: 'ShopPage',
    component: () => import('../views/shop/ShopPage')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
