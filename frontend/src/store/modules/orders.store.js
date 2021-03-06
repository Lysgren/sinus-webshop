import API from "@/api"

export default {
  state: {
    shoppingCart: [],
    orders: [],
  },

  getters: {
    getCart: (state) => state.shoppingCart,
    getItemsAmount(state) {
      let totalAmount = 0
      state.shoppingCart.forEach((item) => (totalAmount += item.amount))
      return totalAmount
    },
    orderTotal(state) {
      let total = 0
      state.shoppingCart.forEach((item) => (total += item.amount * item.price))
      return total
    },
    getOrders: (state) => state.orders,
  },
  mutations: {
    setOrders: (state, payload) => (state.orders = payload),

    addToCart(state, item) {
      item = {
        imgFile: item.imgFile,
        longDesc: item.longDesc,
        price: item.price,
        shortDesc: item.shortDesc,
        title: item.title,
        _id: item._id,
        amount: 1,
      }

      const itemId = state.shoppingCart.find(
        (element) => element._id == item._id
      )
      if (itemId != undefined) {
        const index = state.shoppingCart.indexOf(itemId)
        state.shoppingCart[index].amount++
      } else {
        state.shoppingCart.push(item)
      }
    },

    removeFromCart(state, item) {
      state.shoppingCart = state.shoppingCart.filter(
        (product) => product._id != item._id
      )
    },

    changeAmount(state, payload) {
      const option = payload.option
      const itemId = payload.item
      const item = state.shoppingCart.find((product) => product._id == itemId)
      const index = state.shoppingCart.indexOf(item)

      if (option == "inc") {
        state.shoppingCart[index].amount += 1
      }
      if (option == "dec") {
        state.shoppingCart[index].amount -= 1
      }
      if (state.shoppingCart[index].amount < 1) {
        this.commit("removeFromCart", item)
      }
    },

    emptyCart: (state) => (state.shoppingCart = []),
  },
  actions: {
    async placeOrder(state, products) {
      const payload = {
        items: products,
      }

      const response = await API.createOrder(payload)
      return response
    },

    async placeOrderReg(state, products) {
      const payload = {
        items: products,
      }

      const token = sessionStorage.getItem("token")

      const response = await API.createOrderReg(payload, token)

      return response
    },

    async getOrders(context) {
      const token = sessionStorage.getItem("token")

      const responseData = await API.fetchOrders(token)
      context.commit("setOrders", responseData)
    },
  },
  modules: {},
}
