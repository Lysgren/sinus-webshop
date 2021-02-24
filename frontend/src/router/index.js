import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import ProductPage from '../views/productPage.vue'
import Checkout from '../views/checkoutView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/productPage',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
