<template>
  <div class="checkout">
    <div class="billing-address" v-if="loggedIn == false">
      <h4>Billing Address</h4>
      <div class="billing-address-inputs address-inputs">
        <label for="name">NAME:</label>
        <input v-model="userCheck.name" type="text" name="name" />
        <label for="Address1">ADDRESS:</label>
        <input v-model="userCheck.address" type="text" name="Address1" />
        <label for="zip">ZIP</label>
        <input v-model="userCheck.zip" type="text" name="zip" />
        <label for="city">CITY:</label>
        <input v-model="userCheck.city" type="text" name="city" />
        <label for="Mail">EMAIL:</label>
        <input v-model="userCheck.email" type="text" name="Mail" />
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
            <select>
              <option>Mastercard</option>
              <option>Visa</option>
            </select>
          </div>

          <label for="Cardname">NAME:</label>
          <input v-model="cardCheck.cardHolder" type="text" name="Cardname" />
          <label for="CardNr">CARD NR:</label>
          <input v-model="cardCheck.cardNumber" type="text" name="CardNr" />
          <label for="CVV">CVV:</label>
          <input v-model="cardCheck.cardCVV" type="text" name="CVV" />
        </div>
      </div>
      <p class="checkout-error" v-if="error">{{ errorMessage }}</p>
      <div class="button-container">
        <button @click="placeOrder()">PLACE ORDER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
      errorMessage: "You cannot leave fields empty",
      error: false,
      userCheck: {
        name: "",
        address: "",
        email: "",
        city: "",
        zip: "",
      },
      cardCheck: {
        cardNumber: "",
        cardHolder: "",
        cardCVV: "",
      },
    };
  },
  methods: {
    checkValues() {
      let userValues = Object.entries(this.userCheck);
      let cardValues = Object.entries(this.cardCheck);

      for (let current of cardValues) {
        if (current[1].length < 1) {
          return (this.error = true);
        } else {
          return (this.error = false);
        }
      }

      for (let current of userValues) {
        if (this.loggedIn == false && current[1].length < 1) {
          return (this.error = true);
        } else {
          return (this.error = false);
        }
      }
    },
    placeOrder() {
      this.checkValues();

      if (this.error == false) {
        const cart = this.$store.getters.getCart;

        let products = [];

        for (let current of cart) {
          for (let i = 0; i < current.amount; i++) {
            products.push(current._id);
          }
        }
        if (this.loggedIn == true) {
          this.$store.dispatch("placeOrderReg", products);
        } else {
          this.$store.dispatch("placeOrder", products);
        }
        this.$store.commit("emptyCart");
        this.$emit("clicked", "response");
      } else {
        return;
      }
    },
  },
  computed: {
    getToken() {
      return this.$store.getters.getUserToken;
    },
    getUser() {
      return this.$store.getters.getUserData;
    },
  },
  created() {
    if (sessionStorage.getItem("token")) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
};
</script>

<style lang="scss">
.checkout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f4f4f4;
  padding: 2.4rem;
  min-height: 60vh;
  .payment-methods {
    button {
      justify-self: flex-end;
      align-self: flex-end;
    }
  }
  input {
    position: relative;
    font-size: 16px;
    border-width: 2px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 8px;
    outline: none;
  }

}
.address-inputs {
  display: flex;
  flex-direction: column;
  input,
  label,
  select {
    margin: 0.24rem;
    width: fit-content;
  }
}
.card-alternative {
  display: flex;
  flex-direction: column;
  width: fit-content;
  .card-inputs {
    margin: 0.24rem;
    padding: 0.8rem;
  }
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

.checkout-error{
  color: red;
}
</style>
