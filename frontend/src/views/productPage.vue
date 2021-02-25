<template>
  <div class=".product-page home">
    <div class="home-wrapper">
      <div class="dao">
          <Product-details :product="currentProduct"/>
          <OtherMAL />
      </div>
    </div>    
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