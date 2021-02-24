export default {
  state: {
    products: []
  },
  getter: {
    getProducts: (state) => state.getProducts
  },
  mutations: {
    setProducts: (state, products) => state.products = products
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const request = await fetch('http://localhost:5000/api/products/', { method: 'GET'})
      const data = await request.json()
      commit('setProducts', data)
    },
  }
}