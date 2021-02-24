export default {
  state: {
    shoppingCart: [{dummy: 'tröja', id:1}, {dummy: 'tröja', id:2}],
  },

  getters:{
    shoppingCart: state => state.shoppingCart
  },
  mutations: {
    addToCart(state, item) {
      state.shoppingCart.push(item);
    },
  },
  actions: {},
  modules: {},
};
