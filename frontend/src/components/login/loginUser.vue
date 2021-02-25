<template>
  <div class="login-user">
    <div class="login-user-inputs" v-for="(item, index) in Object.keys(inputs)" :key="index">
      <label :for="item">{{ item }}:</label>
      <input type="text" :name="item" v-model="inputs[item]"/>
    </div>
    <button @click="clickMe()">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputs: {"User Name":"", "E-mail":""},
    };
  },
  methods: {
    clickMe() {
      console.log(this.inputs)
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss" >
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