<template>
  <div class="nav-bar">
    <div class="nav-bar-filter">
      <div class="nav-bar-checkbox">
        <input type="checkbox" name="All" v-model="All" />
        <label for="item">All</label>
      </div>
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
      <input v-on:input="search" v-model="searchStr" type="text" placeholder="search for products..." />
    </div>
    <img src="@/assets/navSortLogo.svg" alt="" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      All: false,
      options: { Hoodies: false, "T-shirt": false, Wheels: false, Caps: false },
      searchStr: ''
    }
  },

  methods: {
    search() {
      this.$store.commit('setSearchesProducts', this.searchStr)
    }
  },

  watch: {
    All(value) {
      for (let option in this.options) {
        value ? (this.options[option] = true) : (this.options[option] = false);
      }
    }
  }
}
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