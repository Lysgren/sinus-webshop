<template>
  <div class="login-user">
    <form @submit.prevent="registerUser" class="login-user-inputs">
      <label for="mail">Email</label>
      <input name="mail" v-model="newUser.email" type="email" placeholder="email" />
      <label for="password">Password</label>
      <input name="password" v-model="newUser.password" type="text" placeholder="password" />
      <label for="name">Name</label>
      <input name="name" v-model="newUser.name" type="text" placeholder="name" />
      <label for="street">Street</label>
      <input name="street" v-model="newUser.address.street" type="text" placeholder="street" />
      <label for="zip" >Zip</label>
      <input name="zip" v-model="newUser.address.zip" type="text" placeholder="zip" />
      <label for="city">City</label>
      <input name="city" v-model="newUser.address.city" type="text" placeholder="city" />
      <button>Registrera</button>
    </form>
  </div>   
</template>
<script>
export default {
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        name: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
    };
  },
  methods: {
    registerUser() {
      const payload = this.newUser;
      this.$store.dispatch("registerUser", payload);
      this.$emit("clicked", 'login');
    }
  }
};
</script>

<style lang="scss" scoped>
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