

export default {


  state: {
    userData: {},
    userToken: '',
    error: false
  },

  mutations: {
    setToken:(state, payload) => state.userToken = payload,
    setUserData:(state, payload) => state.userData = payload,
    setError(state){
        state.error = true
        setTimeout(()=>{state.error = false}, 2000) 
    }
  },
  getters: {
      getError:(state) => state.error,
      getUserToken:(state) => state.userToken,
      getUserData:(state) => state.userData
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
           //await console.log(request.status)
            let responseData = 0
            if(request.status == 200) {
                responseData = await request.json()
            } else{
                context.commit('setError')
            }
            
            context.commit('setToken', responseData.token)
            context.commit('setUserData', responseData.user)
            sessionStorage.setItem('token', responseData.token)
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
        let responseData = 0
            if(request.status == 200) {
                responseData = await request.json()
            } else{
                context.commit('setError')
            }
        //const responseData = await request.json()
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
      let responseData = 0
            if(request.status == 200) {
                responseData = await request.json()
            } else{
                context.commit('setError')
            }
      //const responseData = await request.json()
      //console.log(responseData)
      context.commit('setUserData', responseData)
    },
    signOut(context){
        context.commit('setToken', '')
        context.commit('setUserData', {})
        sessionStorage.removeItem('token')
    }
  },
  modules: {
  }
}