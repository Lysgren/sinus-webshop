<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="dao">
          <Product-details v-if="product" :product="product"/>
          <div v-else>Loading...</div>
          <OtherMAL />
      </div>
    </div>    
  </div>
</template>

<script>
import ProductDetails from '../components/Product-details.vue'
import OtherMAL from '@/components/otherMayAlsoLike.vue'

export default {

  computed: {
    product() {
      return this.$store.getters.getSingleProduct
    }
  },

  mounted() {
    this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
  },

  components: { ProductDetails, OtherMAL }

}

</script>

<style scoped>

.home {
  background-color: #DCDCDC;
}

.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dao {
  width: 90vw;
  height: auto;
}



</style>