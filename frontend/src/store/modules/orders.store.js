export default {
  state: {
    shoppingCart: [],
  },

  getters: {
    shoppingCart: (state) => state.shoppingCart,
  },
  mutations: {
    addToCart(state, item) {
      item = {
        imgFile: item.imgFile,
        longDesc: item.longDesc,
        price: item.price,
        shortDesc: item.shortDesc,
        title: item.title,
        _id: item._id,
        amount: 1,
      };

      const itemId = state.shoppingCart.find(
        (element) => element._id == item._id
      );
      if (itemId != undefined) {
        const index = state.shoppingCart.indexOf(itemId);
        state.shoppingCart[index].amount++;
      } else {
        state.shoppingCart.push(item);
      }
    },
  },
  actions: {},
  modules: {},
};
