<template>
  <div class="products-wrapper">
    <FilterBar />
    <div class="products">
      <div class="product-list" v-if="products">
        <Product
          v-for="product of products"
          :key="product._id"
          :product="product"
          :color="'black'"
          class="product"
        />
      </div>
      <div v-else>Loading...</div>
      <img src="@/assets/productArrows.svg" alt="" />
    </div>
  </div>
</template>

<script>
import Product from '@/components/product.vue'
import FilterBar from '@/components/filter-bar.vue'

export default {

  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  },

  components: { Product, FilterBar }

}
</script>

<style lang="scss" scoped>
.products-wrapper {
  width: 90vw;
}
.products {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: fit-content;
  }
}
// flyttas till gemensam css då den används av oTMAL
.product-list {
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 8rem;
  gap: 0.4rem;
  grid-auto-flow: row;
  height: fit-content;
  .product {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0.5px solid rgba(0, 0, 0, 0.15);
  }
}
</style>