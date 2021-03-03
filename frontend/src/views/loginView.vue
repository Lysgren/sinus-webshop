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
  components: {
    Login,
    Register,
  },
  data() {
    return {
      loginStatus: true,
      status: 'login',
    }
  },
  computed: {
    infoStr() {
      return this.status == 'login' ? 'Already have an account? Press here to login' : 'Dont have an account? Press here to register one!'
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

<style lang="scss" >
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dcdcdc;
  padding: 3em 0;
  height: 100%;
  width: 100%;
  .login-view-center {
    background: white;
    padding: 2.4rem;
  }
}
</style>