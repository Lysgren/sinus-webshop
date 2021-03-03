<template>
  <div class="cart">
    <div class="cart-items">
      <h4>Cart ({{ items }})</h4>

      <shoppingCart />
    </div>
    <div class="cart-order">
      <div class="cart-order-sum">
        <p>
         Continue to checkout for payment options.
        </p>

        
        <span
          ><p>TOTAL: {{ orderSum }} SEK</p></span
        >
      </div>
      <div class="button-container" v-if="items > 0" >
        <button @click="checkout()">
          CONTINUE TO CHECKOUT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import cartItem from "@/components/CartItem.vue";
import shoppingCart from "@/components/Cart.vue";
export default {
  components: {
    //cartItem,
    shoppingCart,
  },

  methods: {
    checkout() {
      this.$emit("clicked", "checkout");
    },
  },

  computed: {
    items() {
      return this.$store.getters.getItemsAmount;
    },

    orderSum() {
      return this.$store.getters.orderTotal;
    },
  },

  created() {
    if (this.$route.path == "/checkout" && this.items < 1) {
      this.$router.push({ path: "/" });
    }
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
      margin-bottom: 0.64rem;
      background: #f4f4f4;
      p {
        text-align: center;
      }
    }
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
  text-align: center;
  font-size: 18px;
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
</style>