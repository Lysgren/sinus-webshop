export default {
  state: {
    products: false,
    product: false,
    searchedProducts: false,
  },
  getters: {
    getProducts: state =>  state.products,
    getSingleProduct: state => state.product,
    getRelevantProducts: state => {
      if (state.products != false) {
        const arr = []

        while (arr.length < 3) {
          const random = Math.floor(Math.random() * state.products.length)
          if (arr.indexOf(random) === -1) {
            arr.push(random)
          }
        }

        return [state.products[arr[0]], state.products[arr[1]], state.products[arr[2]]]
      } else {
        return []
      }

    },
    getSearchedProducts: state => state.searchedProducts

  },
  mutations: {
    setProducts: (state, products) => state.products = products,
    setSingleProduct: (state, product) => state.product = product,
    setSearchesProducts: (state, search) => {
      if (search != '') {
        const matches = []

        state.products.forEach(product => {
          if (product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            matches.push(product)
          }
        })

        state.searchedProducts = matches
      } else {
        state.searchedProducts = state.products
      }
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const request = await fetch('http://localhost:5000/api/products/', { method: 'GET'})
      await request.json().then(response => commit('setProducts', response))
    },
    fetchSingleProduct: async ({ commit }, id) => {
      const request = await fetch('http://localhost:5000/api/products/' + id, { method: 'GET'})
      await request.json().then(response => commit('setSingleProduct', response))
    }
  }
}