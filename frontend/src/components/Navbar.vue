<template>
  <div class="navbar">
    <img @click="navHome" src="@/assets/sinus-logo.svg" alt="sinus logo" />
    <button @click="logOut" v-if="loggedIn">Log out</button>
    <button @click="logIn" v-else>Logga in</button>
    <button @click="createProduct" v-if="admin">Create product</button>
    <button @click="account" v-if="loggedIn">My Account</button>
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
      this.displayCart = !this.displayCart;
    },
    logIn() {
<<<<<<< HEAD
      this.$router.push("/login")
    },
    logOut() {
      this.$store.dispatch("signOut")
    },
    navHome() {
      this.$router.push("/")
=======
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
>>>>>>> bugFix
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
<<<<<<< HEAD
      return this.$store.getters.getUserData.role == 'admin' ? true : false
    }
  }
}
=======
      return this.$store.getters.getUserData.role == "admin" ? true : false;
    },
  },
};
>>>>>>> bugFix
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

.navbar img {
  cursor: pointer;
}
.cart-img {
  width: 1rem;
  cursor: pointer;
}
</style>