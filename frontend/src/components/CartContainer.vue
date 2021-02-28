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
    <button @click="placeOrder">place order</button>
    <div class="continue">
      <router-link to="/checkout"><button>Continue</button></router-link>
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

    placeOrder() {
      const cart = this.$store.getters.getCart

      let products = []

      for (let current of cart) {
        for (let i = 0; i < current.amount; i++) {
          products.push(current._id)
        }
      }
      if(this.loggedIn == true) {
        console.log('placeOrderReg')
        this.$store.dispatch("placeOrderReg", products)
      } else {
        console.log('placeOrder')
        this.$store.dispatch("placeOrder", products)
      }
    },
  },

  computed: {
    orderTotal() {
      return this.$store.getters.orderTotal
    },
    loggedIn() {
      return !(this.$store.getters.getUserToken.length < 1);
    }
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
  z-index: 14;
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

button {
  background-color: black;
  width: 13em;
  height: 2em;
  color: white;
  margin-top: 1em;
  cursor: pointer;
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
