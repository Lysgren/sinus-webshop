import Vue from 'vue'
import Vuex from 'vuex'


import customerModule from './modules/customer.store.js'
import ordersModule from './modules/orders.store.js'
import productsModule from './modules/products.store.js'

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
