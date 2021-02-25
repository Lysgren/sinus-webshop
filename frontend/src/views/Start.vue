<template>
  <div class="start home">
    <div class="product-components">
    <HeroPage />
    <Products />
    </div>
  </div>
</template>

<script>
import HeroPage from '@/components/Hero-page.vue'
import Products from '@/components/Products.vue'

export default {

  mounted() {
    this.$store.dispatch('fetchProducts')
  },

  components: { HeroPage, Products}
}
</script>

<style scoped>
.start {
  height: 100%;
  width: 100%;
}
.product-components{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
}
</style>