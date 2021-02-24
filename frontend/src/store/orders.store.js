import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
   orders: [
        {
          id: 13434,
          item: "tröja",
          price: "124",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "S",
        },
        {
          id: 223424,
          item: "tröja",
          price: "173",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "S",
        },
        {
          id: 32344,
          item: "tröja",
          price: "383",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "M",
        },
      ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})