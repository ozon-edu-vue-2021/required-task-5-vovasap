import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/views/pages/Products.vue') },
    {
      path: '/shopping-cart',
      component: () => import('@/views/pages/ShoppingCart.vue'),
    },
    {
      path: '/favorites',
      component: () => import('@/views/pages/Favorites.vue'),
    },
  ],
});
