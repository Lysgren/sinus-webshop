<template>
  <div class="login-view">
    <div class="login-view-center">
      <Login @clicked="onClick" v-if="status == 'login'" />
      <Register @clicked="onClick" v-else-if="status == 'register'" />
      <div v-else>
        <p>här är ditt respons</p>
      </div>
      <button v-on:click="toggle">{{ infoStr }}</button>
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

.login-view label {
  text-align: left;
  margin: 12px 0 2px 5px;
  font-size: 16px;
}

.login-view input {
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

.login-view button {
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 32px;
  text-align: center;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
}

.login-view button:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

.login-view h1 {
  margin-bottom: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.row {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin: 25px 20% 10% 20%;
  width: 60%;
}

</style>