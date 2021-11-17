import ApiService from '@/@core/api/ApiService';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    getProducts({ commit }) {
      ApiService.getProducts().then((response) => {
        commit('setProducts', response);
      });
    },
  },
});
