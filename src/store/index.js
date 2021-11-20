import ApiService from '@/@core/api/ApiService';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: {},
    total: 0,
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    total: (state) => state.total,
    favorites: (state) => state.products.filter((product) => product.favorite),
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    updateProductInCart: (state, product) => {
      state.cart = {
        ...state.cart,
        [product.id]: product,
      };
    },
    updateProduct: (state, product) => {
      state.products = state.products.map((productInStore) => {
        if (product.id === productInStore.id) return product;
        return productInStore;
      });
    },
    addInCart: (state, product) => {
      if (state.cart[product.id]) {
        const count = product.count + state.cart[product.id].count;
        state.cart[product.id] = {
          ...product,
          count,
        };
      } else {
        state.cart[product.id] = product;
      }
    },
    removeFromCart: (state, removedProduct) => {
      const cart = {};
      Object.entries(state.cart).forEach(([id, product]) => {
        if (Number(id) !== removedProduct.id) {
          cart[id] = product;
        }
      });
      state.cart = cart;
    },
    setTotal: (state, total) => {
      state.total = total;
    },
  },
  actions: {
    updateTotal({ state, commit }) {
      const total = Object.values(state.cart).reduce((total, product) => {
        const sum = product.count * product.price;
        return total + sum;
      }, 0);
      commit('setTotal', total);
    },
    async getProducts({ commit }) {
      const products = await ApiService.getProducts();

      const images = [
        6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
        6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
      ];

      const updatedProducts = products.map((product) => {
        product.image = `${
          images[Math.floor(Math.random() * images.length)]
        }.webp`;

        product.price = Math.floor(Math.random() * (1000 - 50) + 50);
        product.favorite = false;
        return product;
      });

      commit('setProducts', updatedProducts);
    },
  },
});
