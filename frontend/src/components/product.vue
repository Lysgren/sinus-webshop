<template>
  <div class="product">
    <div class="hover-div">
      <a href="#" @click="viewMore(product._id)">View More</a>
    </div>
    <div class="img">
      <img :src="require(`@/assets/${product.imgFile}`)" alt="" />
    </div>
    <img
      class="add-cart"
      @click="addToCart()"
      src="@/assets/icon-bag-black.svg"
      alt="shoppingcart"
    />
    <h4 :style="{ color: color }">{{ product.title }}</h4>
    <p :style="{ color: color }">{{ product.price }} kr</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    color: String,
  },

  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },
    viewMore(id) {
      this.$store.commit("setRelevantProduct");
      if (this.$route.params.id != undefined) {
        this.$route.params.id = "";
        this.$store.dispatch("fetchSingleProduct", id);
        this.$router.push(`${id}`);
      } else {
        this.$router.push(`productPage/${id}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.product {
  padding: 0.8rem;
  min-width: 8rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  justify-content: stretch;
  .img {
    grid-column: 1 / end;
    grid-row: 1/5;
    justify-self: stretch;
    align-self: stretch;
    display: flex;
    align-content: center;
    justify-content: center;
    transition: opacity 0.5s ease-in-out;
    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }
  }
  a {
    text-align: center;
    grid-column: 2/5;
    grid-row: 1/end;
    justify-self: stretch;
    align-self: center;
    width: 100%;
    z-index: 2;
    display: none;
    opacity: 0;
    text-decoration: none;
    text-align: center;
    color: black;
    font-family: "Arial";
  }
  .hover-div {
    grid-column: 2/5;
    grid-row: 1/end;
    z-index: 2;
  }
  .hover-div:hover a {
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    opacity: 1;
  }
  .hover-div:hover + .img {
    opacity: 0.27;
  }
  h4 {
    text-align: center;
    grid-column: 2/5;
    grid-row: 5 / end;
    margin-top: 10px;
    font-family: "Arial";
    word-spacing: 9999rem;
  }
  h4 ~ h4 {
    /* Undo last assignment */
    word-spacing: unset;
    display: table-caption;
  }
  p {
    grid-column: 5 / end;
    grid-row: 5 / end;
    justify-self: flex-end;
    align-self: flex-end;
  }
  .add-cart {
    object-fit: contain;
    grid-column: 1/2;
    grid-row: 1 / 4;
    cursor: pointer;
    transition: backGround 0.5s ease-in-out;
  }
  .add-cart:hover {
    background: rgba(128, 128, 128, 0.247);
  }
}
</style>