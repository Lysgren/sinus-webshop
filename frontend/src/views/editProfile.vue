<template>
  <div class="login-user">
    <form
      @submit.prevent="updateUser"
      class="login-user-inputs"
      :class="{ error: error }"
    >
      <label for="mail">Email</label>
      <input
        v-model="editUser.email"
        name="mail"
        type="email"
        placeholder="mail"
      />
                     <!--
      <label for="name">Password</label>
      <input
        name="password"
        v-model="password"
        type="password"
        placeholder="password"
      />
        -->
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
      <span v-if="error == true">Information entered incorrectly...</span>
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
        name: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
      //password: "",
    };
  },
  methods: {
    async updateUser() {
      /*
      if (this.password.length > 0) {
        this.editUser["password"] = this.password;
      }
      */
      const value = await this.$store.dispatch("updateUser", this.editUser);
      if (value == true) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    },
    error() {
      return this.$store.getters.getError;
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
.error {
  label,
  button,
  input {
    color: red;
  }
}

.login-user {
  font-family: "Courier New";
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
    padding: 1.28rem;
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
      border-color: #cccccc;
      background-color: #ffffff;
      color: #000000;
      border-style: solid;
      border-radius: 8px;
      outline: none;
    }
  }
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