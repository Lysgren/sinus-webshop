<template>
  <div>
    
    <cartItem v-for="item in items" :key="item._id" :item="item" />
    
    
  </div>
</template>
<script>
import cartItem from "@/components/CartItem.vue";
export default {
  components: {
    cartItem,
  },
 
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
  },
};
</script>
<style lang="scss" scoped>





</style>