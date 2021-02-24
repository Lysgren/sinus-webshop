<template>
  <div class="home">
    <Navbar />
    <div class="product-components">
    <HeroPage />
    <Products />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HeroPage from '@/components/Hero-page.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'

export default {
 components: { Navbar, HeroPage, Products, Footer }
}
</script>

<style scoped>

.product-components{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
}

</style>