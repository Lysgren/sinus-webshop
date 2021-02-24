<template>
  <footer class="footer">
    <ul>
      <li>Support</li>
      <li>Customer service</li>
      <li>Contact</li>
      <li>Delivery info</li>
      <li>Order status</li>
    </ul>
    <div>Logo</div>
    <div class="cards">
       <img src="@/assets/visa_logo.png" alt="Visa">
       <img src="@/assets/paypal_logo.png" alt="Paypal">
       <img src="@/assets/mastercard_logo.png" alt="Mastercard"> 
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

   position: fixed;
   left: 0;
   bottom: 0;
   height: 10rem;
   width: 100%;
   background-color: #303030;
   color: white;
   text-align: center;
}

.footer ul {
  list-style-type: none;
}

.cards {
  margin-bottom: -3rem;
}

.cards img {
  width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

</style>