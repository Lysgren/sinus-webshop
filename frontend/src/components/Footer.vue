<template>
  <footer class="footer">
    <ul>
      <li>Support</li>
      <li>Customer service</li>
      <li>Contact</li>
      <li>Delivery info</li>
      <li>Order status</li>
    </ul>
    <div class="logo">
      <div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <img src="@/assets/sinus-logo.svg" alt="Sinus logo" />
    </div>
    <div class="cards">
      <img src="@/assets/visa_logo.png" alt="Visa" />
      <img src="@/assets/paypal_logo.png" alt="Paypal" />
      <img src="@/assets/mastercard_logo.png" alt="Mastercard" />
    </div>
  </footer>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 15rem;

  background-color: #303030;
  color: white;
  text-align: center;
}

.footer ul {
  margin-top: 2rem;
  list-style-type: none;
  font-family: Arial;
  font-weight: 550;
  text-transform: uppercase;
}

.footer li {
  margin: 0 15px 15px 0;
}

.logo {
  margin-top: 2rem;
}

.logo img {
  width: 12rem;
  margin-top: 2.5rem;
}

.dot {
  height: 50px;
  width: 50px;
  margin: 0 10px 0 10px;
  background-color: #8382c2;
  border-radius: 50%;
  display: inline-block;
}

.cards img {
  width: 4rem;
  margin-left: 5px;
  margin-right: 5px;
}
</style>