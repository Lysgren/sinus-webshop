<template>
  <div class="cart">
    <div class="cart-items">
      <h4>Cart ({{items.length}})</h4>

      <shoppingCart/>
    <!-- <cartItem v-for="item in items" :key="item._id" :item="item" />

    <ul>
    <li v-for="item in items" :key="item._id" >{{item}}</li>

    </ul> -->
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
//import cartItem from "@/components/CartItem.vue";
import shoppingCart from '@/components/Cart.vue'
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
  

  computed:{

    items(){
      return this.$store.getters.getCart
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
      background: #f4f4f4;
      p {
        text-align: center;
      }
    }
  }
}
</style>