<template>
  <div class="home">
    <Navbar />
    <HeroPage />
    <Products />
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