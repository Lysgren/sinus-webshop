<template>
  <div class="login-user">
    <form @submit.prevent="updateUser" class="login-user-inputs">
      <input :value="userData.email" v-on:input="editUser.email = $event.target.value" type="email" placeholder="mail"/>
      <input :value="userData.name" v-on:input="editUser.name = $event.target.value" type="text" placeholder="name" />
      <input :value="userData.address.street" v-on:input="editUser.address.street = $event.target.value" type="text" placeholder="street"/>
      <input :value="userData.address.zip" v-on:input="editUser.address.zip = $event.target.value" type="text" placeholder="zip" />
      <input :value="userData.address.city" v-on:input="editUser.address.city = $event.target.value" type="text" placeholder="city" />
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