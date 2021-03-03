<template>
  <div class="order-history-item">
    <h4>Order id: {{ order._id }}</h4>
    <ul>
      Individual products:
      <li v-for="item of order.items" :key="item._id">
        Name: {{ item.title }} Amount: {{ item.amount }} Price: {{ item.price }}
      </li>
    </ul>
    <p>Order status: {{ status }}</p>
    <p>Order places: {{ timeStamp }}</p>
    <p>Total cost: {{ order.orderValue }} sek</p>
  </div>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  computed: {
    status() {
      return this.order.status == "inProcess"
        ? "Order is in process"
        : "ERROR value";
    },
    timeStamp() {
      return new Date(this.order.timeStamp);
    },
  },
};
</script>

<style lang="scss" scoped>
.order-history-item {
  padding: 2.4rem;
  height: fit-content;
  width: fit-content;
  ul {
    list-style: none;
  }
}
</style>