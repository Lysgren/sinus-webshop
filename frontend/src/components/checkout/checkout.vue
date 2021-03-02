<template>
  <div class="checkout">
    <div class="billing-address" v-if="loggedIn">
      <h4>Billing Address</h4>
      <div class="billing-address-inputs address-inputs">
        <label for="name">NAME:</label>
        <input type="text" name="name" />
        <label for="Address1">ADDRESS:</label>
        <input type="text" name="Address1" />
        <label for="zip">ZIP</label>
        <input type="text" name="zip" />
        <label for="city">CITY:</label>
        <input type="text" name="city" />
        <label for="Mail">EMAIL:</label>
        <input type="text" name="Mail" />
      </div>
    </div>
    <div class="billing-address address-inputs" v-else>
      <label for="name">NAME:</label>
      <input type="text" :value="getUser.name" />
      <label for="Mail">EMAIL:</label>
      <input type="text" :value="getUser.email" />
      <label for="Address1">ADDRESS:</label>
      <input
        type="text "
        v-for="(item, index) in getUser.address"
        :key="index"
        :value="item"
      />
    </div>
    <div class="payment-methods">
      <div class="payment-methods-inputs address-inputs">
        <h4>Payment Methods</h4>

        <div class="card-alternative">
          <div class="card-inputs">
            <input name="Visa" type="checkbox" />
            <label for="Visa">Visa</label>
            <input name="Mastercard" type="checkbox" />
            <label for="Mastercard">Mastercard</label>
          </div>
          <label for="Cardname">NAME:</label>
          <input type="text" name="Cardname" />
          <label for="CardNr">CARD NR:</label>
          <input type="text" name="CardNr" />
          <label for="CVV">CVV:</label>
          <input type="text" name="CVV" />
        </div>
      </div>
      <button @click="placeOrder()">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    }
  },
  methods: {
    placeOrder() {
      const cart = this.$store.getters.getCart

      let products = []

      for (let current of cart) {
        for (let i = 0; i < current.amount; i++) {
          products.push(current._id)
        }
      }
      if (this.loggedIn == true) {
        this.$store.dispatch("placeOrderReg", products)
      } else {
        this.$store.dispatch("placeOrder", products)
      }
      this.$store.commit("emptyCart")
      this.$emit("clicked", "response")
    },
  },
  computed: {
    getToken() {
      return this.$store.getters.getUserToken
    },
    getUser() {
      return this.$store.getters.getUserData
    },
  },
  created() {
    if (sessionStorage.getItem("token")) {
      this.loggedIn = false
    } else {
      this.loggedIn = true
    }
  },
}
</script>

<style lang="scss">
.checkout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f4f4f4;
  padding: 2.4rem;
  .payment-methods {
    button {
      justify-self: flex-end;
      align-self: flex-end;
    }
  }
}
.address-inputs {
  display: flex;
  flex-direction: column;
  input,
  label,
  select {
    width: fit-content;
  }
}
.card-alternative {
  display: flex;
  flex-direction: column;
  width: fit-content;
  .card-inputs {
    padding: 0.8rem;
  }
}
</style>
