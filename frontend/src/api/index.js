export default {
  
  /********** Customer module **********/

  async signInUser(payload){
      const request = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      return request
  },

  async getTheUser(token){
    const request = await fetch("http://localhost:5000/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const responseData = await request.json()
      return responseData
  },

  async registerTheUser(payload){
    const request = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
    return request.status
  },

  async updateTheUser(payload, token){
    const request = await fetch("http://localhost:5000/api/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })
      return request.status
  },

  
  /********** Orders module **********/
  
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

  /********** Admin module **********/

  createTheProduct: async (product, token) => {
    // Gör en fetch-request där man skickar med token och produkten man vill skapa.
    const request = await fetch('http://localhost:5000/api/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(product)
    })
    
    return request.status
  },

  deleteTheProduct: async (id, token) => {
    // Gör en DELETE-request där man skickar med token och produkten man vill skapa.
    const request = await fetch('http://localhost:5000/api/products/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return request.status
  },

  editTheProduct: async (product, token) => {
    // Gör en EDIT-request där man skickar med token och produkten man vill ändra
    const request = await fetch('http://localhost:5000/api/products/' + product._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(product)
    })

    return request.status
  }
}