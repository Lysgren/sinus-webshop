export default {
  state: {
    products: false,
    product: false,
    searchedProducts: false,
    relevantProducts: false,
  },
  getters: {
    getProducts: (state) => state.products,
    getSingleProduct: (state) => state.product,
    getSearchedProducts: (state) => state.searchedProducts,
    getRelevantProducts: (state) => state.relevantProducts,
  },
  mutations: {
    setProducts: (state, products) => (state.products = products),
    setSingleProduct: (state, product) => (state.product = product),
    setSearchesProducts: (state, search) => {
      if (search != '') {
        const matches = []

        state.products.forEach((product) => {
          if (product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            matches.push(product)
          }
        })

        state.searchedProducts = matches
      } else {
        state.searchedProducts = state.products
      }
    },
    setRelevantProduct: (state) => {
      const arr = []
      const randomProducts = []
      
      while (arr.length < 3) {
        const random = Math.floor(Math.random() * state.products.length)
        if (arr.indexOf(random) === -1) {
          if (state.product._id != state.products[random]._id) {
            arr.push(random)
            randomProducts.push(state.products[random])
          }
        }
      }
      state.relevantProducts = randomProducts
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const request = await fetch('http://localhost:5000/api/products/', {
        method: 'GET',
      })
      await request
        .json()
        .then((response) => commit('setProducts', response))
        .then(() => commit('setRelevantProduct'))
    },
    fetchSingleProduct: async ({ commit }, id) => {
      const request = await fetch('http://localhost:5000/api/products/' + id, {
        method: 'GET',
      })
      await request
        .json()
        .then((response) => commit('setSingleProduct', response))
    },
  },
}
