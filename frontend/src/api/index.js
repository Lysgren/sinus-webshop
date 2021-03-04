export default {
  async createOrder(products) {
    const request = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(products),
    })
    const response = await request.json()
    return response
  },

  async createOrderReg(products, token) {
    const request = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": " application/json",
      },
      body: JSON.stringify(products),
    })

    const response = await request.json()
    return response
  },

  async fetchOrders(token) {
    

    const request = await fetch("http://localhost:5000/api/orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const responseData = await request.json()
    return responseData
  },

}
