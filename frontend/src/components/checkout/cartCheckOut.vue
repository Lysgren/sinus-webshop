<template>
  <div class="cart">
    <div class="cart-items">
      <h4>Cart ({{items}})</h4>

      <shoppingCart/>
    
    </div>
    <div class="cart-order">
      <div class="cart-order-sum">
        <p>
          Prices and delivery costs are not confirmed until you've reached the
          checkout.
        </p>
        <p>We accept:</p>
        <div class="img">
          kort bilder
        </div>
        <span><p>TOTAL: {{orderSum}} SEK</p></span>
      </div>
      <button v-if="items >1" @click="checkout()">CONTINUE TO CHECKOUT</button>
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
      return this.$store.getters.getItemsAmount
    },

    orderSum(){
      return this.$store.getters.orderTotal
    }

  },

  created(){

    if(this.$route.path == '/checkout' && this.items <1){
      this.$router.push({ path: '/' })
    }
  }
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