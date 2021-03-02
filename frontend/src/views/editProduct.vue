<template>
  <div class="update-wrapper">
    <h1>Edit product</h1>
    <form v-on:submit.prevent="send" class="update-wrapper-form">
      <label>Title for product</label>
      <input v-model="product.title" type="text" placeholder="Title" required>

      <label>Price of product</label>
      <input v-model="product.price" type="number" placeholder="Price" required>

      <label>Short description of product</label>
      <textarea v-model="product.shortDesc" type="text" placeholder="Short description" required></textarea>

      <label>Long description of product</label>
      <textarea v-model="product.longDesc" type="text" placeholder="Long description" required></textarea>

      <label>Local path to image file</label>
      <select v-model="product.imgFile" required>
        <option value="skateboard-greta.png">Gretas Fury Skateboard</option>
        <option value="skateboard-generic.png">Skateboard generic</option>
        <option value="hoodie-fire.png">Hoodie Fire</option>
        <option value="hoodie-ash.png">Hoodie Ash</option>
        <option value="hoodie-ocean.png">Hoodie Ocean</option>
        <option value="wheel-wave.png">Wheel Wave</option>
        <option value="wheel-rocket.png">Wheel Rocket</option>
        <option value="wheel-spinner.png">Wheel Spinner</option>
      </select>

    </form>
    <p class="message" v-if="message">{{ message }}</p>
    <button v-on:click="send">Edit product</button>

  </div>
</template>

<script>
export default {
  data() { 
    return {
      message: false
    }
  },
  computed: {
    product() {
      return this.$store.getters.getSingleProduct
    }
  },
  methods: {
    async send() {
      if (this.product.title != '' && this.product.price != 0 && this.product.shortDesc != '' && this.product.longDesc != '' && this.product.imgFile != '') {
        const returnedValue = await this.$store.dispatch('editProduct', this.product)

        if (returnedValue == true) {
          this.message = 'Product edited succesfully. Returning to main page in a few seconds...'
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        } else {
          this.message = 'Something went wrong, kindly consult the machine god for advise...'
        }
      }
    }
  },
  mounted(){
    if (!this.$store.getters.getUserToken || !this.$store.getters.getAdmin) {
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>

.message{
  font-size: 1.3em;
  font-weight: 600;
  color: red;
}

.update-wrapper{
  margin-right: 20%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
}
.update-wrapper-form{
  display: flex;
  flex-direction: column;
}

</style>