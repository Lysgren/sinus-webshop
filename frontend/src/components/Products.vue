<template>
  <div class="products-wrapper">
    <filterBar />
    <div class="products">
      <div class="product-list">
        <product
          v-for="(item, index) in productInfo"
          :key="index"
          :productInfo="item"
          :color="'black'"
          class="product"
        />
      </div>
      <img src="@/assets/productArrows.svg" alt="" />
    </div>
  </div>
</template>

<script>
import product from "@/components/product.vue";
import filterBar from "@/components/filter-bar.vue";
export default {
  components: {
    product,
    filterBar,
  },
  data() {
    return {
      productInfo: 6,
      // productInfo bytas mot Object från API
    };
  },
};
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