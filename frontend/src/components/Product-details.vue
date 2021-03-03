<template>
  <div class="details-wrapper">
    <div class="back bold">
      <router-link to="/">Back to products</router-link>
      <button class="admin-delete" v-if="admin" v-on:click="deleteProduct">Delete this product</button>
      <router-link v-if="admin" :to="'/productPage/' + product._id +'/edit'">Edit product</router-link>
    </div>

    <div class="prod">
      <div class="image">
        <img
          :src="require(`@/assets/${product.imgFile}`)"
          class="item-img"
          alt=""
        />
      </div>
      <div class="details">
        <h2>{{ product.title }}</h2>
        <p class="bold">ART.NR: {{ product._id }}</p>
        <p>{{ product.color }}</p>
        <p class="bold">{{ product.price }} SEK</p>
        <p class="center desc">{{ product.longDesc }}</p>
        <button class="bold" @click="addToCart()">ADD TO CART</button>
        <p class="message" v-if="message"> {{ message }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: false
    }
  },
  props: {
    product: Object,
  },
  computed: {
    admin() {
      return this.$store.getters.getUserData.role == 'admin' ? true : false
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
    async deleteProduct() {
      const returnedValue = await this.$store.dispatch('deleteProduct', this.product._id)

      if (returnedValue == true) {
        this.message = 'Product deleted succesfully. Returning to main page in a few seconds...'
        setTimeout(() => {
          this.$router.push('/')
        }, 3000)
      } else {
          this.message = 'Something went wrong, kindly consult the machine god for advise...'
      }
    }
  }
}
</script>

<style scoped>


.message{
  font-size: 1.5em;
  color: red;
  font-weight: 600;
}

.admin-delete{
  background-color: white;
  border: none;
  outline: none;
  color: red;
}


.details-wrapper {
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
  padding: 4em 2em;
}

button {
  background-color: black;
  width: 13em;
  height: 2em;
  color: white;
  margin-top: 1em;
  cursor: pointer;
}

button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

select {
  width: 13em;
  height: 2em;
  margin-top: 2em;
}

.back {
  align-self: flex-end;
  margin-right: 3em;
  margin-bottom: 1em;
  cursor: pointer;
}

.back:hover {
  color: hotpink;
}

.prod {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.image {
  height: 30%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img {
  height: 400px;
  width: auto;
}

.details {
  max-width: 500px;
  height: auto;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 120%;
}

.desc {
  font-weight: 400;
  font-size: 18px;
  max-width: 400px;
  margin: 1em;
}

.details > h2 {
  font-size: 2.5em;
  margin-bottom: 0.3em;
  font-weight: 400;
}

.details > p {
  margin-top: 0.7em;
}

.bold {
  font-weight: 700;
}

.center {
  text-align: center;
}
</style>