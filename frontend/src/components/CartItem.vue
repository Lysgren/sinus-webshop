<template>
  <div class="item">
    <img :src="require(`@/assets/${item.imgFile}`)" alt="product" />

    <div class="align-left">
      <p>{{ item.title }}</p>
      <p>Artikelnummer: {{ item._id }}</p>
    </div>
    <div>
      <p>antal: {{item.amount}}</p>
      <p>SIZE {{ item.shortDesc }}</p>
    </div>
    <div class="align-right">
      <p>X</p>
      <p>pris kr</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>
<style scoped>
.item {
  display: grid;
  grid-template-columns: 0.5fr auto 1fr 1fr;
  border: 1px solid black;
  margin: 1rem;
  height:fit-content;
}

.item img {
  width: 3rem;
}

.item p {
  margin: 0;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}
</style>