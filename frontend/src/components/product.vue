<template>
  <div class="product">
    <div class="img">
      <img src="@/assets/wheel-wave.png" alt="" />
    </div>
    <h4 :style="{color:color}">title {{ productInfo }}</h4>
    <p :style="{color:color}">699kr</p>
  </div>
</template>

<script>
export default {
  props: {
    productInfo: Number,
    color: String
    // byts mot object från API
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.product {
  padding: 0.8rem;
  min-width: 8rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  .img {
    grid-column: 1 / end;
    grid-row: 1/5;
    justify-self: stretch;
    align-self: stretch;
    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }
  }
  h4 {
    text-align: center;
    grid-column: 2/5;
    grid-row: 5 / end;
    word-spacing: 9999rem;
  }
  h4 ~ h4 {
    /* Undo last assignment */
    word-spacing: unset;
    display: table-caption;
  }
  p {
    grid-column: 5 / end;
    grid-row: 5 / end;
    justify-self: flex-end;
    align-self: flex-end;
  }
}
</style>