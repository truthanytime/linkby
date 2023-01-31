<template>
  <div id="app">
    <MyComponent :items="items" />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
const items = {
	name: 'My Items',
	items: [
		{ id: 1, name: 'Item 1', score: 30 },
		{ id: 2, name: 'Item 2', score: 50 },
		{ id: 3, name: 'Item 3', score: 20 },
		{ id: 4, name: 'Item 4', score: 20 },
		{ id: 5, name: 'Item 5', score: 30 },
		{ id: 6, name: 'Item 6', score: 20 }
	]
};

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var nitems = groupBy(items.items, 'score');
nitems = {
  name: 'My Items',
	items: nitems
}

export default {
  name: 'app',
  components: {
    MyComponent
  },
  data(){
    return{
      items: nitems
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
