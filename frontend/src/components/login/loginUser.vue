<template>
  <div class="login-user">
    <h1>Login to account</h1>
    <form @submit.prevent="submit" class="login-user-inputs" :class="{ error: error }">
      <label name="name" for="email">Email</label>
      <input name="name" v-model="email" type="email" placeholder="email" />
      <label name="password" for="password">Password</label>
      <input name="password" v-model="password" type="password" placeholder="password"/>
      <span v-if="error == true">Wrong email or password</span>
    </form>
    <div class="button-container">
      <button v-on:click="submit">Log in</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: { "User Name": "", "E-mail": "" },
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      const payload = { email: this.email, password: this.password };
      this.$store.dispatch("signIn", payload);
    },
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    loggedIn() {
      return this.$store.getters.getUserToken
    },
  },
  watch: {
    loggedIn(value) {
      if (value) {
        this.$router.push("/")
      }
    }
  }
};
</script>

<style lang="scss" scoped >
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