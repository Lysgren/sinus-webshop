<template>
  <div class="cart-container">
    <span class="cart-container-top">
      <h2>Shopping cart</h2>

      <img
        src="@/assets/close-24px.svg"
        alt="close window"
        @click="closeWindow"
      />
    </span>

    <cart />

    <span class="total-amount">
      <h4>TOTAL:</h4>
      <p>{{ orderTotal }} SEK</p>
    </span>
    <div class="continue">
      <div class="button-container">
      <button @click="toCheckout()">Continue</button>
      </div>
      <p>Klicka för att komma vidare till checkout</p>
    </div>
  </div>
</template>
<script>
import cart from "@/components/Cart.vue"
export default {
  components: {
    cart,
  },
  methods: {
    closeWindow() {
      this.$emit("close")
    },
    toCheckout() {
      this.$emit("close")
      if (this.$route.path != "/checkout" && this.cart.length > 0) {
        this.$router.push("/checkout")
      }
    },
  },

  computed: {
    cart() {
      return this.$store.getters.getCart
    },
    orderTotal() {
      return this.$store.getters.orderTotal
    },
    loggedIn() {
      return this.$store.getters.getUserToken
    },
  },

  watch: {
    cart(value) {
      if (value.length < 1) {
        this.$emit("close")
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.cart-container {
  width: 40rem;
  height: fit-content;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.541);
  z-index: 200;
  display: flex;
  flex-direction: column;
  
}

.cart-container-top {
  display: flex;
  justify-content: space-between;
}

.cart-container-top img {
  cursor: pointer;
  margin: 1rem;
}

.cart-container-top h2 {
  margin: 1rem;
}
.continue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem;
}

.continue p {
  font-size: 0.6em;
}






.button-container {
  display: flex;
  justify-content: center;
  width: fit-content;
}
.button-container button {
  width: 100%;
  background-color: #ffffff;
  border: none;
  color: #0a0909;
  padding: 15px 32px;
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  cursor: pointer;
  border-style: solid;
  border-width: 2px;
  border-color: #0a0909;
  text-decoration: none;
}
.button-container button:hover {
  background-color: #0a0909;
  color: #ffffff;
  transition: 0.5s;
}

button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.total-amount {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
</style>
