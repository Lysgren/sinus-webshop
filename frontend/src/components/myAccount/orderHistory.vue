<template>
  <div>
    <div> Order id: {{ order._id }} </div>
    <div> Individual products:
      <div
        v-for="item of order.items"
        :key="item._id"
      > Name: {{ item.title }} Amount: {{ item.amount }} Price: {{ item.price }}
      </div>
    </div>
    <div>Order status: {{ status }}</div>
    <div>Order places: {{ timeStamp }}</div>
    <div>Total cost: {{ order.orderValue }} sek</div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object
  }, 
  computed: {
    status() {
      return this.order.status == 'inProcess' ? 'Order is in process' : 'ERROR value'
    },
    timeStamp() {
      return new Date (this.order.timeStamp)
    }
  }
}
</script>

<style scoped>
</style>