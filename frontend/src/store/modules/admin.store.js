export default {
  actions: {
    createProduct: async ({ dispatch }, product) => {
      const userToken = sessionStorage.getItem('token')
      product.price = parseFloat(product.price)

      const request = await fetch('http://localhost:5000/api/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify(product)
      })

      if (request.status == 200) {
        dispatch('fetchProducts', null, { root: true })
        return true
      } else {
        return false
      }
    },
    deleteProduct: async ({ dispatch }, id) => {
      const userToken = sessionStorage.getItem('token')

      const request = await fetch('http://localhost:5000/api/products/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`
        }
      })

      if (request.status == 200) {
        dispatch('fetchProducts', null, { root: true })
        return true
      } else {
        return false
      }
    },
    editProduct: async ({ dispatch }, product) => {
      const userToken = sessionStorage.getItem('token')

      const request = await fetch('http://localhost:5000/api/products/' + product._id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify(product)
      })

      if (request.status == 200) {
        dispatch('fetchProducts', null, { root: true })
        return true
      } else {
        return false
      }
    }
  }
}