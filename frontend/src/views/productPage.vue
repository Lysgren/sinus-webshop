<template>
  <div class="home">
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
import ProductDetails from '../components/Product-details.vue'

export default {
  components: { OtherMAL, ProductDetails },
  data(){return{
   currentProduct: {
          id: 13434,
          item: "hoodie",
          price: "499",
          img: "'@/assets/hoodie-ocean.png'",
          color: "ocean"
    }
  }}
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