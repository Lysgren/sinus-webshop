<template>
  <div class="checkout">
    <div class="billing-address">
      <h4>Billing Address</h4>
      <div class="billing-address-inputs address-inputs">
        <label for="name">NAME:</label>
        <input type="text" name="name" />
        <label for="Address1">ADDRESS LINE1:</label>
        <input type="text" name="Address1" />
        <label for="Address2">ADDRESS LINE2:</label>
        <input type="text" name="Address2" />

        <select name="Country" id="">
          <option value="" default>Country</option>
          <option value="" v-for="(item, index) in countries" :key="index">
            {{ item }}
          </option>
        </select>
        <select name="Country" id="">
          <option value="" default>City</option>
          <option value="" v-for="(item, index) in cities" :key="index">
            {{ item }}
          </option>
        </select>
        <label for="Mail">EMAIL:</label>
        <input type="text" name="Mail" />
      </div>
    </div>
    <div class="payment-methods">
      <div class="payment-methods-inputs address-inputs">
        <h4>Payment Methods</h4>
        <div class="payment-alternative">
          <input name="paypal" type="checkbox" />
          <label for="creditcard">Paypal</label>
        </div>
        <div class="payment-alternative">
          <input name="creditcard" type="checkbox" />
          <label for="creditcard">Credcard</label>
        </div>
        <div class="card-alternative">
          <div class="card-inputs">
            <input name="Visa" type="checkbox" />
            <label for="Visa">Visa</label>
            <input name="Mastercard" type="checkbox" />
            <label for="Mastercard">Mastercard</label>
          </div>
          <label for="name">NAME:</label>
          <input type="text" name="name" />
          <label for="name">CARD NR:</label>
          <input type="text" name="name" />
        </div>
      </div>
      <button @click="checkout()">CONTINUE TO CHECKOUT</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkout() {
      this.$emit("clicked", "response");
    },
  },
  data() {
    return {
      countries: ["Norge", "Tyskland", "Japan"],
      cities: ["Borås", "Flen", "Stockholm", "Tokyo"],
    };
  },
};
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