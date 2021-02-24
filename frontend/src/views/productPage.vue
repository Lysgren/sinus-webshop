<template>
  <div class=".product-page home">
    <Navbar />
    <div></div>
    <otherMAL />
    <Footer />
  </div>
</template>

<script>
import OtherMAL from '@/components/otherMayAlsoLike.vue'

export default {
 components: { OtherMAL }
}
</script>
<style scoped>
.product-page {
  height: 100%;
  width: 100%;
}
</style>