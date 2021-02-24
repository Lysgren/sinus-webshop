<template>
  <div class="home">
    <Navbar />
    <div></div>
    <otherMAL />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import OtherMAL from '@/components/otherMayAlsoLike.vue'
import Footer from '@/components/Footer.vue'

export default {
 components: { Navbar, OtherMAL, Footer }
}
</script>