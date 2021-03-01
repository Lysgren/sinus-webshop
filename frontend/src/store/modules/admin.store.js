export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    async createProduct(_, product) {
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
        console.log('Product created succesfully')
      } else {
        console.log('Something went wrong...')
        console.log(request.status)
      }
    }
  }
}