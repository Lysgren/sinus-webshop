<template>
  <div class="cart">
    <h2>Shopping cart</h2>

    <cartItem v-for="item in items" :key="item.id" :item="item" />
    <div class="continue">
      <button>Continue</button>
      <p>Klicka för att komma vidare till checkout</p>
    </div>
  </div>
</template>
<script>
import cartItem from "@/components/CartItem.vue";
export default {
  components: {
    cartItem,
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
<style scoped>
.cart {
  min-width: 40rem;
  height: fit-content;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.541);
}

.continue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 1rem;
}

.continue p {
  font-size: 0.6em;
}
</style>