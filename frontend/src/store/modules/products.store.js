export default {
  state: {
    products: [],
    product: {}
  },
  getters: {
    getProducts: state => state.products,
    getSingleProduct: state => state.product
  },
  mutations: {
    setProducts: (state, products) => state.products = products,
    setSingleProduct: (state, product) => state.product = product
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const request = await fetch('http://localhost:5000/api/products/', { method: 'GET'})
      const data = await request.json()
      commit('setProducts', data)
    },
    fetchSingleProduct: async ({ commit }, id) => {
      const request = await fetch('http://localhost:5000/api/products/' + id, { method: 'GET'})
      await request.json().then(response => commit('setSingleProduct', response))
    }
  }
}