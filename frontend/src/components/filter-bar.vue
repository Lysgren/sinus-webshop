<template>
  <div class="nav-bar">
    <div class="row">
      <div class="search-input">
        <img src="@/assets/prodNaviSearch.svg" alt="" />
        <input v-on:input="search" v-model="searchStr" type="text" placeholder="Search for products" />
      </div>

      <details class="custom-select">
        <summary class="radios">
          <input type="radio" name="item" id="default" title="Sort products" checked>
          <input type="radio" name="item" title="Item 1">
          <input type="radio" name="item" title="Item 2">
          <input type="radio" name="item" title="Item 3">
          <input type="radio" name="item" title="Item 4">
      </summary>
      <ul class="list">
        <li><button v-on:click="sortByPrice('low')">From lowest price</button></li>
        <li><button v-on:click="sortByPrice('high')">From highest price</button></li>
        <li><button v-on:click="sortByName('startA')">Name A - Z</button></li>
        <li><button v-on:click="sortByName('startZ')">Name Z - A</button></li>
      </ul>
    </details>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchStr: ''
    }
  },

  methods: {
    search() {
      this.$store.commit('setSearchesProducts', this.searchStr)
    },
    sortByPrice(value) {
      this.$store.commit('sortByPrice', value)
    },
    sortByName(value) {
      this.$store.commit('sortByName', value)
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
  height: 5rem;
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
    margin-top: 4px;
    img {
      background: white;
      height: 50%;
      padding: 0.16rem;
    }
    input {
      height: 40px;
      outline: none;
      min-width: 12rem;
      border: none;
    }
  }
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

details {
	position: relative;
	width: 15rem;
  margin-left: 20px;
}

summary {
  height: 15px;
  font-family: sans-serif;
	padding: 1rem;
	cursor: pointer;
	border-radius: 5px;
	background: white;
	list-style: none;
}

summary::-webkit-details-marker {
	display: none;
}

details[open] summary:before {
	content: '';
	display: block;
	width: 100vw;
	height: 100vh;
	background: transparent;
	position: fixed;
	top: 0;
	left: 0;
}

summary:after {
  margin-left: 100px;
  margin-bottom: 4px;
	content: '';
	display: inline-block;
	width: .5rem;
	height: .5rem;
	border-bottom: 1px solid currentColor;
	border-left: 1px solid currentColor;
	border-bottom-left-radius: 2px;
	transform: rotate(45deg) translate(50%, 0%);
	transform-origin: center center;
	transition: transform ease-in-out 100ms
}

summary:focus {
	outline: none;
}

details[open] summary:after {
	transform: rotate(-45deg) translate(0%, 0%);
}

ul {
  list-style-type: none;
  font-family: sans-serif;
  font-size: 12px;
	width: 100%;
	background: white;
	position: absolute;
	top: calc(100% + .5rem);
	left: 0;
	padding: 1rem;
	margin: 0;
	box-sizing: border-box;
	border-radius: 5px;
	overflow-y: auto;
  border-style: solid;
  border-width: 2px;
}

li {
	margin: 0;
	padding: 1rem 0;
	border-bottom: 1px solid #ccc;
}

li:first-child {
	padding-top: 5px;
}

li:last-child {
	padding-bottom: 5px;
	border-bottom: none;
}

summary.radios {
	counter-reset: radios;
}

input[type=radio] {
	counter-increment: radios;
	appearance: none;
	display: none;
}

input[type=radio]:checked {
	display: inline;
}

input[type=radio]:after {
	content: attr(title);
	display: inline;
	font-size: 1rem;
}

ul.list {
	counter-reset: labels;
}

button {
	width: 100%;
	cursor: pointer;
  border: none;
  font-family: sans-serif;
  font-size: 13px;
  background: white;
  height: 40px;
  transition-duration: 0.4s;
}

button:hover {
  background-color: black;
  color: white;
}

</style>