<template>
  <div class="login-user">
    <h1>Login to account</h1>
    <form
      @submit.prevent="submit"
      class="login-user-inputs"
      :class="{ error: error }"
    >
      <label name="name" for="email">Email</label>
      <input name="name" v-model="email" type="email" placeholder="email" />
      <label name="password" for="password">Password</label>
      <input
        name="password"
        v-model="password"
        type="password"
        placeholder="password"
      />
      <button>Logga in</button>
      <span v-if="error == true">Wrong email or password</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: { "User Name": "", "E-mail": "" },
      email: "",
      password: "",
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
      return !(this.$store.getters.getUserToken.length < 1);
    },
  },
  watch: {
    loggedIn(value) {
      if (value) {
        this.$router.push("/");
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
  label {
    padding: 0.24rem;
  }
}
</style>