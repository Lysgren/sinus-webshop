<template>
  <div class="nav-bar">
    <div class="nav-bar-filter">
      <div
        class="nav-bar-checkbox"
        v-for="(item, index) in Object.keys(options)"
        :key="index"
      >
        <input type="checkbox" name="item" v-model="options[item]" />
        <label for="item">{{ item }} </label>
      </div>
    </div>
    <div class="search-input">
      <img src="@/assets/prodNaviSearch.svg" alt="" />
      <input type="text" placeholder="search for products..." />
    </div>
    <img src="@/assets/navSortLogo.svg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      All: true,
      options: { Hoodies: true, "T-shirt": true, Wheels: true, Caps: true },
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.nav-bar {
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  .nav-bar-filter {
    display: flex;
    align-items: center;
    .nav-bar-checkbox {
      display: flex;
      align-items: center;
      margin: 0.48rem;
      label {
        color: white;
        margin: 0.24rem;
      }
      input {
        margin: 0.24rem;
      }
    }
  }
  .search-input {
    display: flex;
    align-items: center;
    background: white;
    height: fit-content;
    img {
      background: white;
      height: 50%;
      padding: 0.16rem;
    }
    input {
      height: fit-content;
      min-width: 12rem;
      border: none;
    }
  }
}
</style>