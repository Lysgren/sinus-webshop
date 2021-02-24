import Vue from 'vue'
import Vuex from 'vuex'


import customerModule from '@/store/customer.store.js'
import ordersModule from '@/store/orders.store.js'
import productsModule from '@/store/products.store.js'

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{

    customer: customerModule,
    orders: ordersModule,
    products: productsModule,
  },


  state: {
  },
  mutations: {
  },
  actions: {
  },
 
})
