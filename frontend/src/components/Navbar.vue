<template>
  <div class="navbar">
    <img @click="navHome" src="@/assets/sinus-logo.svg" alt="sinus logo" />
    <button @click="logOut" v-if="loggedIn">Log out</button>
    <button @click="logIn" v-else>Logga in</button>
    <button @click="createProduct" v-if="admin">Create product</button>
    <button @click="account" v-if="loggedIn">My Account</button>
    <div class="cart-icon-wrapper" v-if="currentRoute != '/checkout'">
    <img
      class="cart-img"
      @click="openCart"
      src="@/assets/icon-bag-white.svg"
      alt="shoppingcart"
    />
    <div class="number-display" v-if="cartItemsAmount >0">
    <p>{{cartItemsAmount}}</p>
    </div>
    </div>
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

      this.displayCart = !this.displayCart;
    },
    logIn() {
      if (this.$route.path != "/login") {
        this.$router.push("/login");
      }
    },
    logOut() {
      this.$store.dispatch("signOut");
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    navHome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
    edit() {
      if (this.$route.path != "/edit") {
        this.$router.push("/edit");
      }
    },
    account() {
      if (this.$route.path != "/myaccount") {
        this.$router.push("/myaccount");
      }
    },
    createProduct() {
      if (this.$route.path != "/createProduct") {
        this.$router.push("/createProduct");
      }
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters.getUserToken;
    },
    admin() {
      return this.$store.getters.getUserData.role == 'admin' ? true : false
    },

    cartItemsAmount(){
      
      return this.$store.getters.getItemsAmount
    },

    currentRoute(){

      return this.$route.path
    }
  }
}
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

.navbar img, .navbar button {
  cursor: pointer;
}
.cart-img {
  width: 1rem;
  cursor: pointer;
}

.number-display{
  background-color: khaki;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>