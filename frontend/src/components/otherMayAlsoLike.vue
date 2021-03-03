<template>
  <div class="other-M-A-L">
    <h3>OTHERS <br>ALSO<br>LIKED...</h3>
    <div class="product-list">
      <Product
        v-for="(product, index) of recommendedProducts"
        :key="product._id"
        :product="recommendedProducts[index]"
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

  components: { Product }

}
</script>

<style lang="scss" scoped>
.other-M-A-L {
  margin-bottom: 5em;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, rgba(77, 86, 109, 0) 0%, #4d566d 100%);
  width: 100%;
  h3 {
    color: white;
    font-size: 30px;
    padding: 0.8rem;
    margin: 0 4em;
    font-weight: 300;
  }
  h3 ~ h3 {
    /* Undo last assignment */
    word-spacing: unset;
    display: table-caption;
  }
  .product-list {
    min-width: 70%;
    .product {
      border: 0.04rem solid white;
    }
  }
}

// tas bort finns i products
.product-list {
  margin-right: 2em;
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 14rem;
  gap: 5rem;
  grid-auto-flow: row;
  height: fit-content;
}
</style>