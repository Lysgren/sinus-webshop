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
      const request = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

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
      const request = await fetch("http://localhost:5000/api/me", {
        headers: {
          Authorization: `Bearer ${context.state.userToken}`,
        },
      })
      const responseData = await request.json()
      context.commit("setUserData", responseData)
    },

    async registerUser(context, payload) {
      const request = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      if (request.status == 200) {
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
      const request = await fetch("http://localhost:5000/api/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.state.userToken}`,
        },
        body: JSON.stringify(payload),
      })
      let responseData = 0
      if (request.status == 200) {
        responseData = await request.json()
      } else {
        context.commit("setError")
      }
      context.commit("setUserData", responseData)
    },
    signOut(context) {
      context.commit("setToken", "")
      context.commit("setUserData", {})
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("userData")
    },
  },
}
