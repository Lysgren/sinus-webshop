

export default {
  state: {
    shoppingCart: [],
    orders: []
  },

  getters: {
    getCart: (state) => state.shoppingCart,
    orderTotal: (state) => {
      let total = 0
      state.shoppingCart.forEach((item) => (total += item.amount * item.price))
      return total
    },
    getOrders: (state) => state.orders
  },
  mutations: {

    setOrders: (state, payload) => state.orders = payload,

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
  },
  actions: {
    async placeOrder(state, products) {
      const payload = {
        items: products,
      }

      const request = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
        },
        body: JSON.stringify(payload),
      })

      const response = await request.json()
      return response
    },


    async placeOrderReg(state, products) {
      const payload = {
        items: products,
      }

      const token = sessionStorage.getItem('token')

      const request = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": " application/json",
        },
        body: JSON.stringify(payload),
      })
      
      const response = await request.json()
      console.log(response)
      return response
    },



    async getOrders(context){
      console.log('getting orders')
      const token = sessionStorage.getItem('token')
      
      const request = await fetch('http://localhost:5000/api/orders', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      const responseData = await request.json()
      context.commit('setOrders', responseData)
      console.log(responseData)
  },



  },
  modules: {},
}
