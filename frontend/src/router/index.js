import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import ProductPage from '../views/productPage.vue'
import Checkout from '../views/checkoutView.vue'
import Login from '../views/loginView.vue'
import Edit from '../views/editProfile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/productPage/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
