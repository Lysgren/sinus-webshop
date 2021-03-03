<template>
  <footer class="footer">
    <div class="address">
      <h3>Address:</h3>
      <address>
        Årstaängsvägen 9
        <br />
        117 43
        <br />
        Stockholm
      </address>
      <h3 class="tel">Tel:<span> 08-557 683 53</span></h3>
    </div>
    <div class="logo">
      <div class="dots">
        <div class="dot">
          <img src="@/assets/iconfinder_Instagram.svg" alt="">
        </div>
        <div class="dot">
          <img src="@/assets/iconfinder_Facebook.svg" alt="">
        </div>
        <div class="dot">
          <img src="@/assets/iconfinder-Youtube.svg" alt="">
        </div>
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
export default {};
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

.footer .address {
  margin-top: 2rem;
  list-style-type: none;
  font-weight: 400;
  text-align: left;
}

address{
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
}

h3{
  font-weight: 400;
}

.tel{
  margin-top: 10px;
}

.logo {
  margin-top: 2rem;
}

.logo img {
  width: 12rem;
  margin-top: 2.5rem;
}

.dots{
  display: flex;
  flex-direction: row;
}

.dot>img {
  height: 50px;
  width: auto;
  margin: 0 10px 0 10px;
  border-radius: 50%;
  cursor: pointer;
}

.cards img {
  width: 4rem;
  margin-left: 5px;
  margin-right: 5px;
}
</style>