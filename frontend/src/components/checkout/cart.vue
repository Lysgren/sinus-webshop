<template>
  <div class="cart">
    <div class="cart-items">
      <h4>Cart ({{items.length}})</h4>
      <cartItem v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div class="cart-order">
      <div class="cart-order-sum">
        <div></div>
        <p>
          Prices and delivery costs are not confirmed until you've reached the
          checkout.
        </p>
        <p>We accept:</p>
        <div class="img">
          kort bilder
        </div>
      </div>
      <button @click="checkout()">CONTINUE TO CHECKOUT</button>
    </div>
  </div>
</template>

<script>
import cartItem from "@/components/CartItem.vue";
export default {
  components: {
    cartItem,
  },
  methods: {
    checkout() {
      this.$emit("clicked", "checkout");
    },
  },
  data() {
    return {
      items: [
        {
          id: 13434,
          item: "tröja",
          price: "124",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "S",
        },
        {
          id: 223424,
          item: "tröja",
          price: "173",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "S",
        },
        {
          id: 32344,
          item: "tröja",
          price: "383",
          img: "'@/assets/hoodie-ocean.png'",
          quantity: 1,
          color: "blue",
          size: "M",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cart {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem;
  padding: 2.4rem;
  .cart-order {
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    button {
      width: fit-content;
      justify-self: flex-end;
      align-self: flex-end;
    }
    .cart-order-sum {
      padding: 1.6rem;
      background: #f4f4f4;
      p {
        text-align: center;
      }
    }
  }
}
</style>