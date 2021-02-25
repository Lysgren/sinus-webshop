<template>
  <div class="other-M-A-L">
    <h3>OTHERS ALSO LIKED...</h3>
    <div class="product-list">
      <Product
        v-for="product of recommendedProducts"
        :key="product._id"
        :product="product"
        :color="'white'"
        class="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "@/components/product.vue";
export default {

  computed: {
    recommendedProducts() {
      return this.$store.getters.getRelevantProducts
    }
  },

  mounted() {
    if (this.$store.getters.getProducts == false) {
      this.$store.dispatch('fetchProducts')
    }
  },

  components: { Product },

}
</script>

<style lang="scss" scoped>
.other-M-A-L {
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, rgba(77, 86, 109, 0) 0%, #4d566d 100%);
  width: 100%;
  h3 {
    color: white;
    word-spacing: 9999rem;
  }
  h3 ~ h3 {
    /* Undo last assignment */
    word-spacing: unset;
    display: table-caption;
  }
  .product-list {
    .product {
      border: 0.04rem solid white;
    }
  }
}

// tas bort finns i products
.product-list {
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 8rem;
  gap: 0.4rem;
  grid-auto-flow: row;
  height: fit-content;
}
</style>