import API from "@/api"

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
      if (search != "") {
        const matches = []

        state.products.forEach((product) => {
          if (
            product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
          ) {
            matches.push(product)
          }
        })

        state.searchedProducts = matches
      } else {
        state.searchedProducts = state.products
      }
    },
    sortByPrice: (state, str) => {
      state.searchedProducts =
        str == "low"
          ? state.products.sort(
              (productOne, productTwo) => productOne.price - productTwo.price
            )
          : state.products.sort(
              (productOne, productTwo) => productTwo.price - productOne.price
            )
    },
    sortByName: (state, str) => {
      if (str == "startA") {
        state.searchedProducts = state.products.sort((first, second) => {
          const firstFixed = first.title.toUpperCase()
          const secondFixed = second.title.toUpperCase()
          return firstFixed < secondFixed
            ? -1
            : firstFixed > secondFixed
            ? 1
            : 0
        })
      } else {
        state.searchedProducts = state.products.sort((first, second) => {
          const firstFixed = first.title.toUpperCase()
          const secondFixed = second.title.toUpperCase()
          return firstFixed > secondFixed
            ? -1
            : firstFixed < secondFixed
            ? 1
            : 0
        })
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
    },
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      await API.fetchProducts()
        .then((response) => commit("setProducts", response))
        .then(() => commit("setRelevantProduct"))
    },
    fetchSingleProduct: async ({ commit }, id) => {
      await API.fetchSingleProduct(id).then((response) =>
        commit("setSingleProduct", response)
      )
    },
  },
}
