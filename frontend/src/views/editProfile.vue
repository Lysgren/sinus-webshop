<template>
  <div class="login-user">
    <form @submit.prevent="updateUser" class="login-user-inputs">
      <input v-model="editUser.email" type="email" placeholder="mail"/>
      <input v-model="editUser.password" type="text" placeholder="password" />
      <input v-model="editUser.name" type="text" placeholder="name" />
      <input
        v-model="editUser.address.street"
        type="text"
        placeholder="street"
      />
      <input v-model="editUser.address.zip" type="text" placeholder="zip" />
      <input v-model="editUser.address.city" type="text" placeholder="city" />
      <button>Uppdatera</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editUser: {
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
    updateUser() {
      const payload = this.editUser;
      this.$store.dispatch("updateUser", payload);
      this.$emit("clicked", "response");
    },
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    }
  },
};
</script>

<style lang="scss" scoped >
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