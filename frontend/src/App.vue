<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}
#app {
  width: 100%;
}
</style>
