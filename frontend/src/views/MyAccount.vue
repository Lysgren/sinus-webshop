<template>
  <div class="account-page-wrapper">
    <h1>Ditt konto</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, expedita!
      Molestiae nobis sit dolores. Pariatur, voluptatum fuga velit architecto
      nam laborum dolores sint et expedita tempora eveniet distinctio similique
      magni?
    </p>
    <div class="account-wrapper">
      <div class="prev-orders">
        <h3>Tidigare ordrar:</h3>
        <div class="order-history">
          <OrderHistory
            v-for="order in orders"
            :key="order._id"
            :order="order"
          />
        </div>
      </div>
      <div class="account-info">
        <h3>Dina uppgifter:</h3>
        <p>{{ user.name }}</p>
        <p>{{ user.address.street }}</p>
        <p>{{ user.address.zip }} {{ user.address.city }}</p>
        <p class="mail">Email: {{ user.email }}</p>
        <!-- <router-link class="bold link" to="/edit"
          >Ändra mina uppgifter</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import OrderHistory from "@/components/myAccount/orderHistory.vue";

export default {
  computed: {
    user() {
      return this.$store.getters.getUserData;
    },
    orders() {
      return this.$store.getters.getOrders;
    },
  },
  mounted() {
    if (!this.$store.getters.getUserToken) {
      this.$router.push("/")
    }
    this.$store.dispatch('getOrders')
  },
  components: { OrderHistory },
};
</script>

<style scoped>
.account-page-wrapper {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 0;
}
.account-page-wrapper > p {
  max-width: 600px;
  line-height: 130%;
  margin-bottom: 3em;
  font-size: 20px;
}

.account-wrapper {
  width: 90vw;
  padding: 2em 2em;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.order-history {
  display: flex;
  flex-direction: column;
  height: 40vh;
  overflow-y: scroll;
}
.account-info,
.prev-orders {
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 130%;
  width: 40%;
  font-size: 20px;
}

.bold {
  font-weight: 700;
}

.link {
  margin-top: 2em;
  color: blue;
  cursor: pointer;
}

.link:hover {
  color: hotpink;
}

h3 {
  text-align: center;
  border-radius: 9px;
  margin-bottom: 1.5em;
  color: white;
  background-color: black;
  padding: 1em;
  width: 80%;
}

.mail {
  margin-top: 1em;
}
</style>