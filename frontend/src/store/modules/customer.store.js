

export default {


  state: {
    userData: {},
    userToken: ''
  },

  mutations: {
    setToken:(state, payload) => state.userToken = payload,
    setUserData:(state, payload) => state.userData = payload
  },

  actions: {
    async signIn(context, payload){
            const request = await fetch('http://localhost:5000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload) 
            })
            const responseData = await request.json()
            context.commit('setToken', responseData.token)
            //console.log(responseData.token)
        },

    async getUser(context){
          //console.log(context.userToken)
          const request = await fetch('http://localhost:5000/api/me', {
              headers: {
                  Authorization: `Bearer ${context.state.userToken}`
              }
          })
          const responseData = await request.json()
          context.commit('setUserData', responseData)
          console.log(responseData)
      },
      
      async registerUser(context, payload){
        console.log(payload)
        const request = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const responseData = await request.json()
        console.log(responseData)
    },

    async updateUser(context, payload){
      console.log(payload)
      const request = await fetch('http://localhost:5000/api/me', {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${context.state.userToken}`
          },
          body: JSON.stringify(payload)
      })
      const responseData = await request.json()
      //console.log(responseData)
      context.commit('setUserData', responseData)
  }
      
  },
  modules: {
  }
}