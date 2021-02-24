import Vue from 'vue'
import Vuex from 'vuex'


import customerModule from '@/store/modules/customer.store.js'
import ordersModule from '@/store/modules/orders.store.js'
import productsModule from '@/store/modules/products.store.js'

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
