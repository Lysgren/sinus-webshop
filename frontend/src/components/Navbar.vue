<template>
  <div class="navbar">
    <div class="logo-header">
      <img
        class="logo"
        @click="navHome"
        src="@/assets/sinus-logo.svg"
        alt="sinus logo"
      />
      <h1>Sinus Webshop</h1>
    </div>
    <nav class="nav-header">
      <button @click="logOut" v-if="loggedIn">Log out</button>
      <button @click="logIn" v-else>Logga in</button>
      <button @click="createProduct" v-if="admin">Create product</button>
      <button v-if="admin && loggedIn" @click="account">Profile</button>
      <img
        v-if="!admin && loggedIn"
        @click="account"
        class="account"
        src="@/assets/iconfinder-account.svg"
        alt=""
      />
      <div class="cart-icon-wrapper" v-if="currentRoute != '/checkout'">
        <img
          class="cart-img"
          :style="{ cursor: cursor }"
          @click="toggleCart"
          src="@/assets/icon-bag-white.svg"
          alt="shoppingcart"
        />
        <div class="number-display" v-if="cartItemsAmount > 0">
          <p>{{ cartItemsAmount }}</p>
        </div>
      </div>
    </nav>
    <shoppingCart v-if="displayCart" @close="toggleCart" />
  </div>
</template>

<script>
import shoppingCart from "@/components/CartContainer.vue";
export default {
  data() {
    return {
      displayCart: false,
      cursor: "auto",
    };
  },
  components: {
    shoppingCart,
  },

  methods: {
    toggleCart() {
      if (this.cartItemsAmount < 1) {
        this.displayCart = false;
      }

      if (this.cartItemsAmount > 0) {
        this.displayCart = !this.displayCart;
      }
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
      return this.$store.getters.getUserData.role == "admin" ? true : false;
    },

    cartItemsAmount() {
      return this.$store.getters.getItemsAmount;
    },

    currentRoute() {
      return this.$route.path;
    },
  },

  watch: {
    cartItemsAmount(value) {
      if (value < 1) {
        this.cursor = "auto";
      } else {
        this.cursor = "pointer";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 2rem;
  margin: 0;
  padding: 0.4rem 1.6rem;
  height: 10vh;
  .logo-header {
    display: flex;
    h1 {
      margin-top: 15px;
      color: white;
      white-space:nowrap;
    }
    .logo {
      height: 100%;
    }
  }
  button {
    height: fit-content;
    font-size: 1.2rem;
    padding: 0.48rem;
    border-width: 2px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 8px;
  }
  .nav-header {
    min-width: 24vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-img, .account {
    max-height: 100%;
    min-width: 2.4rem;
  }
}

.navbar .logo,
.navbar,
button,
.account {
  cursor: pointer;
}

.pointer {
  cursor: pointer;
}

.number-display {
  background-color: yellow;
  width:2rem;
  height:2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0.5rem;
}

.number-display p{
  font-weight: bold;
}
</style>
