<template>
  <div class="login-user">
    <h1>Register account</h1>
    <form @submit.prevent="registerUser" class="login-user-inputs" :class="{ error: error }">
      <label for="mail">Email</label>
      <input name="mail" v-model="newUser.email" type="email" placeholder="email" required/>
      <label for="password">Password</label>
      <input name="password" v-model="newUser.password" type="text" placeholder="password" required/>
      <label for="name">Name</label>
      <input name="name" v-model="newUser.name" type="text" placeholder="name" required/>
      <label for="street">Street</label>
      <input name="street" v-model="newUser.address.street" type="text" placeholder="street" required/>
      <label for="zip" >Zip</label>
      <input name="zip" v-model="newUser.address.zip" type="text" placeholder="zip" required/>
      <label for="city">City</label>
      <input name="city" v-model="newUser.address.city" type="text" placeholder="city" required/>
      <span v-if="error == true">Information entered incorrectly...</span>
    </form>
    <div class="button-container">
      <button v-on:click="registerUser">Register</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: '',
        name: '',
        address: {
          street: '',
          zip: '',
          city: '',
        },
      },
    };
  },
  methods: {
    async registerUser() {
      if (this.newUser.email != '' && this.newUser.password != '' && this.newUser.name != '' && this.newUser.address.street != '' && this.newUser.address.zip != '' && this.newUser.address.city != '') {
        const payload = this.newUser
        const value = await this.$store.dispatch("registerUser", payload)
        if (value == true) {
          this.$emit("clicked", 'login')
        }
      }
    }
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  label,
  button,
  input {
    color: red;
  }
}

.login-user-inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  grid-auto-rows: auto;
  gap: 1rem;
  min-width: 24rem;
  padding: 0.24rem;
  height: 100%;
  width: 100%;
  h1 {
    margin-bottom: 1.5rem;
  }
  label {
    padding: 0.24rem;
    text-align: left;
    margin: 12px 0 2px 5px;
    font-size: 16px;
  }
  input {
    position: relative;
    padding: 12px 0 12px 15px;
    margin-left: -20px;
    margin-right: 10px;
    font-size: 16px;
    border-width: 2px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 8px;
    outline: none; 
  }
}

.login-user h1 {
  margin-bottom: 1.5rem;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button-container button { 
  width: 100%;
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 32px;
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
}
.button-container button:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

</style>