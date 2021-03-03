<template>
  <div class="login-user">
    <form @submit.prevent="updateUser" class="login-user-inputs">
      <label for="mail">Email</label>
      <input
        v-model="editUser.email"
        name="mail"
        type="email"
        placeholder="mail"
      />
      <label for="name">Name</label>
      <input
        name="name"
        v-model="editUser.name"
        type="text"
        placeholder="name"
      />
      <label for="street">Street</label>
      <input
        name="street"
        v-model="editUser.address.street"
        type="text"
        placeholder="street"
      />
      <label for="zip">Zip</label>
      <input
        name="zip"
        v-model="editUser.address.zip"
        type="text"
        placeholder="zip"
      />
      <label for="city">City</label>
      <input
        name="city"
        v-model="editUser.address.city"
        type="text"
        placeholder="city"
      />
    <div class="button-container">
      <button>Uppdatera</button>
    </div>
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
    },
  },
  mounted() {
    if (!this.$store.getters.getUserToken) {
      this.$router.push("/");
    }
    this.editUser = this.userData;
  },
};
</script>

<style lang="scss" scoped >
.login-user {
  min-height: 60vh;
  height: fit-content; 
  padding: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dcdcdc;
  .login-user-inputs {
    background: white;
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
}
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    width: 100%;
  }
}

</style>