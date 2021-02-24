<template>
  <div class="hero-wrapper">
    <div class="image">
      <img src="@/assets/hoodie-ocean.png" alt="">
    </div>
    <div class="info-text">
      <h1>HOODIES</h1>
      <p>499SEK</p>
      <button>BUY NOW</button>
    </div>
  </div>
</template>

<script>
export default {

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image{
  width: 100%;
  height: 100%;
  display: flex;
  
}

img{
  height: 100%;
  width: auto;
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