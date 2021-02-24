<template>
  <div class="item">
    <img :src="require(`@/assets/${item.imgFile}`)" alt="product" />

    <div class="align-left">
      <p>{{ item.title }}</p>
      <p>Artikelnummer: {{ item._id }}</p>
      <div>
        <p>{{ item.shortDesc }}</p>
      </div>
    </div>

    <div class="item-amount">
      <img class="arrow-up" src="@/assets/arrow_24px.svg" alt="arrow up" @click="changeAmount('inc')"/>

      <p>{{ item.amount }}</p>
      <img class="arrow-down" src="@/assets/arrow_24px.svg" alt="arrow down" @click="changeAmount('dec')" />
    </div>
    <div class="right-container">
      <img src="@/assets/close-24px.svg" alt="discard" @click="removeItem"/>
      <p>{{ item.price * item.amount }} SEK</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },

  methods:{
    removeItem(){
      this.$store.commit('removeFromCart', this.item)
    },

    changeAmount(option){
      const payload ={
        item: this.item._id,
        option: option
      }
      this.$store.commit('changeAmount', payload)
    }
  }
};
</script>
<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 3fr 0.5fr 1fr;
  border: 1px solid black;
  margin: 1rem;
  height: fit-content;
}

.item img {
  width: 3rem;
}

.item p {
  margin: 0;
}

.item-amount {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item-amount img {
  width: 1rem;
}
.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.arrow-up {
  transform: rotate(-90deg);
  cursor: pointer;
}
.arrow-down {
  transform: rotate(90deg);
  cursor: pointer;
}

.right-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
.right-container img {
  width: 1rem;
  cursor: pointer;
}
</style>