<template>
  <div>
    <Cart />
    <Checkout />
    <Response />
  </div>
</template>

<script>
import Cart from "@/components/checkout/cart.vue";
import Checkout from "@/components/checkout/checkout.vue";
import Response from "@/components/checkout/response.vue";

export default {
  components: {
    Cart,
    Checkout,
    Response,
  },
};
</script>

<style>
</style>