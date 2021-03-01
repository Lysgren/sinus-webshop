<template>
  <div class="checkout-view home">
    <div class="checkout-flow-banner" v-show="status != 'response'">
      <div class="flow-banner-item">
        <img src="@/assets/fastDelivery.svg" alt="" />
        <h4>1. Collect</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="flow-banner-item">
        <img src="@/assets/shoeStore.svg" alt="" />
        <h4>2. Secure Payment</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="flow-banner-item">
        <img src="@/assets/securePayment.svg" alt="" />
        <h4>3. Fast Delivery</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <Cart v-show="status === 'cart'" @clicked="checkout" />
    <Checkout v-show="status === 'checkout'" @clicked="checkout" />
    <Response v-show="status === 'response'" />
  </div>
</template>

<script>
import Cart from "@/components/checkout/cartCheckOut.vue";
import Checkout from "@/components/checkout/checkout.vue";
import Response from "@/components/checkout/response.vue";

export default {
  components: {
    Cart,
    Checkout,
    Response,
  },
  data() {
    return {
      status: "cart",
    };
  },
  methods: {
    checkout(value) {
      this.status = value;
    },
  },
};
</script>

<style lang="scss">
.checkout-view {
  height: 100%;
  width: 100%;
  background: #DCDCDC;
}
.checkout-flow-banner {
  background: #4d566d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.4rem;
  .flow-banner-item {
    background: white;
    width: fit-content;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
      max-width: 24vw;
    }
  }
}
</style>