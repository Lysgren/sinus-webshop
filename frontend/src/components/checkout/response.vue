<template>
  <div class="response">
    <h2>Thank you for your order!</h2>
    <p>Check your e-mail for order confirmation</p>
    <router-link to="/">Back to products</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.response {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    padding: 0.8rem;
    font-size: 2.4rem;
  }
  p {
    font-size: 0.8rem;
  }
}
</style>