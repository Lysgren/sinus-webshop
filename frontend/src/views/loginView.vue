<template>
  <div class="login-view">
    <div class="login-view-center">
      <Login @clicked="onClick" v-if="status == 'login'" />
      <Register @clicked="onClick" v-else-if="status == 'register'" />
      <div v-else>
        <p>här är ditt respons</p>
      </div>
      <div class="button-container">
        <button v-on:click="toggle">{{ infoStr }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/login/loginUser.vue";
import Register from "@/components/login/register.vue";

export default {
  components: { Login, Register },

  data() {
    return {
      loginStatus: true,
      status: 'login',
    }
  },
  computed: {
    infoStr() {
      return this.status == 'login' ? 'Dont have an account? Press here to register one!' : 'Already have an account? Press here to login'
    }
  },
  methods: {
    onClick(value) {
      this.status = value;
    },
    toggle() {
      this.status == 'login' ? this.status = 'register' : this.status = 'login' 
    }
  },
  watch: {
    status(value) {
      if (!value) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New";
  background: #dcdcdc;
  padding: 3em 0;
  height: 100%;
  width: 100%;
  .login-view-center {
    background: white;
    padding: 2.4rem;
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