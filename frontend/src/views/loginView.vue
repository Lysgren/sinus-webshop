<template>
  <div class="login-view">
    <div class="login-view-center">
      <Login @clicked="onClick" v-if="status === 'login'" />
      <Register @clicked="onClick" v-else-if="status === 'register'" />
      <EditProfile @clicked="onClick" v-else-if="status === 'edit'" />
    </div>
  </div>
</template>

<script>
import EditProfile from "@/components/login/editProfile.vue";
import Login from "@/components/login/loginUser.vue";
import Register from "@/components/login/register.vue";

export default {
  components: {
    EditProfile,
    Login,
    Register,
  },
  data() {
    return {
      loginStatus: true,
      status: "register",
    };
  },
  methods: {
    onClick(value) {
      this.status = value;
    },
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
  padding: 4.8rem;
  height: 100%;
  width: 100%;
  .login-view-center {
    background: white;
    padding: 2.4rem;
  }
}
</style>