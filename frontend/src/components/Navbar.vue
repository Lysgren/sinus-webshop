<template>
  <div class="navbar">
    <img @click="navHome" src="@/assets/sinus-logo.svg" alt="sinus logo" />
    <button @click="logOut" v-if="loggedIn">Log out</button>
    <button @click="logIn" v-else>Log in</button>
    <button @click="edit">Edit</button>
    <img
      class="cart-img"
      @click="openCart"
      src="@/assets/icon-bag-white.svg"
      alt="shoppingcart"
    />
    <shoppingCart v-if="displayCart" @close="openCart" />
  </div>
</template>

<script>
import shoppingCart from "@/components/CartContainer.vue";
export default {
  data() {
    return {
      displayCart: false,
    };
  },
  components: {
    shoppingCart,
  },

  methods: {
    openCart() {
      if (this.displayCart == false) {
        this.displayCart = true;
      } else if (this.displayCart == true) {
        this.displayCart = false;
      }
    },
    logIn() {
      this.$router.push("/login");
    },
    logOut() {
      this.$store.dispatch("signOut");
    },
    navHome() {
      this.$router.push("/");
    },
    edit() {
      this.$router.push("/edit")
    }
  },
  computed: {
    loggedIn() {
      return !(this.$store.getters.getUserToken.length < 1);
    },
  },
  watch: {
    loggedIn(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.navbar {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 2rem;
  /* width: 100vw; */
  margin: 0;
  padding: 0.4rem 1rem;
}
.cart-img {
  width: 1rem;
  cursor: pointer;
}
</style>