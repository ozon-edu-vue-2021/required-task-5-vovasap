<template>
  <div id="app">
    <nav class="menu__list">
      <router-link to="/" class="menu__item">Каталог</router-link>
      <router-link to="favorites" class="menu__item">Избранное</router-link>
      <router-link to="shopping-cart" class="menu__item">Корзина</router-link>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.menu__list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.menu__item {
  height: 40px;
  padding: 0 10px;
  border: 2px solid #ff1493;
  line-height: 2.5;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
}
.router-link-exact-active {
  color: #fff;
  background-color: #ff1493;
}
</style>
