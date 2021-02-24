<template>
  <div class="navbar" >
    <img src="@/assets/sinus-logo.svg" alt="sinus logo" />
    <img class="cart-img" @click="openCart" src="@/assets/icon-bag-white.svg" alt="shoppingcart" />
    <shoppingCart v-if="displayCart" @close="openCart"/>
  </div>
</template>

<script>
import shoppingCart from '@/components/Cart.vue'
export default {

  data(){return{
    displayCart: false,
  }

  },
  components:{
    shoppingCart,
  },

  methods:{
    openCart(){
      if (this.displayCart == false){
      this.displayCart = true}
      else if(this.displayCart == true){
        this.displayCart = false
      }
    }
  }

}
</script>

<style scoped>
.navbar {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 2rem;
  /* width: 100vw; */
  margin: 0;
  padding: 0.4rem 1rem;
}
.cart-img {
  width: 1rem;
  cursor: pointer;
}
</style>