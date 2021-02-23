<template>
  <div class="item">
    <img :src="item.img" alt="hoodie" />
    <div class="align-left">
      <p>{{ item.item }}</p>
      <p>{{ item.color }}</p>
      <p>Artikelnummer: {{ item.id }}</p>
    </div>
    <div>
      <p>{{ item.quantity }}</p>
      <p>SIZE: {{ item.size }}</p>
    </div>
    <div class="align-right">
      <p>X</p>
      <p>{{ item.price }} kr</p>
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