<template>
  <div id="app">
    <Products />
  </div>
</template>

<script>
import Products from '@/views/pages/Products';

export default {
  name: 'App',
  components: {
    Products,
  },
  created() {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
