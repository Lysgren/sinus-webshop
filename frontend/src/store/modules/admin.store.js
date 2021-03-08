import API from "@/api"

export default {
  actions: {
    createProduct: async ({ dispatch }, product) => {
      // Hämtar token från sessionStorage som används vid authorization
      const token = sessionStorage.getItem("token")

      // Konventerar priset som man får från inputen till ett nummer från en sträng.
      product.price = parseFloat(product.price)

      // Kallar createTheProduct i API:et och skickar med produkten och token
      const request = await API.createTheProduct(product, token)

      // Om requesten har gått igenom så kallar man på fetchProducts och returner true
      if (request == 200) {
        dispatch("fetchProducts", null, { root: true })
        return true
      } else {
        return false
      }
    },
    // Action får att ta bort en specifik produkt, tar emot ID:et på produkten man kan ta bort.
    deleteProduct: async ({ dispatch }, id) => {
      // Hämtar token från sessionStorage som används vid authorization
      const token = sessionStorage.getItem("token")

      // Kallar deleteTheProduct i API:et och skickar med produktens id och token
      const request = await API.deleteTheProduct(id, token)

      // Om requesten har gått igenom så kallar man på fetchProducts och returner true
      if (request == 200) {
        dispatch("fetchProducts", null, { root: true })
        return true
      } else {
        return false
      }
    },
    editProduct: async ({ dispatch }, product) => {
      // Hämtar token från sessionStorage som används vid authorization
      const token = sessionStorage.getItem("token")

      // Kallar editTheProduct i API:et och skickar med produkten och token
      const request = await API.editTheProduct(product, token)

      // Om requesten har gått igenom så kallar man på fetchProducts och returner true
      if (request == 200) {
        dispatch("fetchProducts", null, { root: true })
        return true
      } else {
        return false
      }
    },
  },
}
