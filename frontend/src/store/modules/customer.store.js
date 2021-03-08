import API from '@/api'

export default {
  state: {
    userData: JSON.parse(sessionStorage.getItem("userData")) || {},
    userToken: sessionStorage.getItem("token") || null,
    error: false,
  },

  mutations: {
    setToken: (state, payload) => (state.userToken = payload),
    setUserData: (state, payload) => (state.userData = payload),
    setError(state) {
      state.error = true
      setTimeout(() => {
        state.error = false
      }, 3500)
    },
  },
  getters: {
    getError: (state) => state.error,
    getUserToken: (state) => state.userToken,
    getUserData: (state) => state.userData,
    getAdmin: (state) =>
      state.userToken ? state.userData.role === "admin" : false,
  },
  actions: {
    async signIn(context, payload) {
      const request = await API.signInUser(payload)
      if (request.status == 200) {
        let responseData = await request.json()
        context.commit("setToken", responseData.token)
        context.commit("setUserData", responseData.user)
        sessionStorage.setItem("token", responseData.token)
        sessionStorage.setItem("userData", JSON.stringify(responseData.user))
      } else {
        context.commit("setError")
      }
    },
    async getUser(context) {
      const token = context.state.userToken
      const responseData = await API.getTheUser(token)
      context.commit("setUserData", responseData)
    },

    async registerUser(context, payload) {
      const request = await API.registerTheUser(payload)
      if (request == 200) {
          context.dispatch("signIn", {
          email: payload.email,
          password: payload.password,
        })
        return true
      } else {
        context.commit("setError")
        return false
      }
    },

    async updateUser(context, payload) {
      const token = context.state.userToken
      const request = await API.updateTheUser(payload, token)
      if (request == 200) {
        this.dispatch("getUser")
        return true
      } else {
        context.commit("setError")
        return false
      }
    },
    signOut(context) {
      context.commit("setToken", "")
      context.commit("setUserData", {})
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("userData")
    },
  },
}
