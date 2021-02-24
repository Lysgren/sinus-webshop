<template>
  <div class="home">
    <Navbar />
    <div class="home-wrapper">
      <div class="dao">
          <Product-details :product="currentProduct"/>
          <OtherMAL />
      </div>
    </div>    
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import OtherMAL from '@/components/otherMayAlsoLike.vue'
import Footer from '@/components/Footer.vue'
import ProductDetails from '../components/Product-details.vue'

export default {
  components: { Navbar, OtherMAL, Footer, ProductDetails },
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