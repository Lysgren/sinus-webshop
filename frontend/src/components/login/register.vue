<template>
  <div class="login-user">
    <div class="login-user-inputs" v-for="(item, index) in Object.keys(inputs)" :key="index">
      <label :for="item">{{ item }}</label>
      <input type="text" :name="item" v-model="inputs[index]"/>
    </div>
    <button @click="clickMe()">Register User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {"First Name": "", "Last Name": "","User Name":"", "E-mail":""},
    };
  },
  methods: {
    clickMe() {
      this.$emit("clicked", "login");
    },
  },
};
</script>

<style lang="scss">
.login-user-inputs {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  min-width: 24rem;
  padding: 0.24rem;
  height: 100%;
  width: 100%;
  label {
    padding: 0.24rem;
  }
}
</style>