<template>
  <div class="home">
    <div class="home-wrapper">
      <div class="dao">
          <Product-details :product="product"/>
          <!-- <OtherMAL /> -->
      </div>
    </div>    
  </div>
</template>

<script>
// import OtherMAL from '@/components/otherMayAlsoLike.vue'
import ProductDetails from '../components/Product-details.vue'

export default {

  computed: {
    product() {
      return this.$store.getters.getSingleProduct
    }
  },
  created() {
    this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
  },

  components: { ProductDetails }

}

</script>

<style scoped>

.home {
  background-color: #DCDCDC;
}

.home-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 4em 0; */
}

.dao{
  width: 90vw;
  height: auto;
}



</style>