<template>
  <div class="hero-wrapper">
    <div class="image">
      <img :src="require(`@/assets/${product.imgFile}`)" alt="" :class="img">
    </div>
    <div class="info-text">
      <h1>{{product.title}}</h1>
      <p>{{product.price}}SEK</p>
      <button @click="viewMore">BUY NOW</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    viewMore() {
      const id = this.product._id
      this.$store.commit("setRelevantProduct");
      if (this.$route.params.id != undefined) {
        this.$route.params.id = "";
        this.$store.dispatch("fetchSingleProduct", id);
        this.$router.push(`${id}`);
      } else {
        this.$router.push(`productPage/${id}`);
      }
    }
  },

  computed: {
    product(){
      if(this.$store.getters.getRelevantProducts[0] == undefined){
        return {
          _id: 'test',
          title: ' ',
          price: 10,
          imgFile: 'Blank.png',
        }
      } else {
      return this.$store.getters.getRelevantProducts[0]
      }
    },
    img(){
      if(this.product.imgFile.includes('wheel')){
        return 'wheel'
      }
      return 'img'
    }
  }
}
</script>

<style scoped>

*{
  margin: 0;
  box-sizing: border-box;
}

.hero-wrapper{
  width: 90vw;
  height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5em;
  background-image: linear-gradient(180deg, #4D566D, white);
  color: white;
}

.info-text{
  margin-right: 18em;
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img{
  height: 100%;
  width: auto;
}

.img{
  margin: 0;
}

.wheel{
  margin-top: 8%;
}

h1{
  font-size: 35px;
  font-weight: 400;
}

button{
  margin-top: 3em;
  border: none;
  background-color: #EFF31E;
  color: black;
  font-weight: 700;
  padding: 0.5em 1em;
  cursor: pointer;
}

button:hover{
  font-weight: 800;
}

</style>