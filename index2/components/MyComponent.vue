<template>
  <div id="items">
	<h1>{{ items.name }}</h1>
  <div v-for="(val, key) in items">
    <div class="item">
      <h3>Items with Score {{ key }}</h3>
      <ul>
        <li v-for="(c_val, c_key) in val">{{ c_val.name }}</li>
        <li>Item 6</li>
        <li>Item 4</li>
        <li>Item 3</li>
      </ul>
    </div>
    {{ name }}: {{ value }}
  </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    items: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
