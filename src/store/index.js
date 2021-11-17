import ApiService from '@/@core/api/ApiService';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: new Map(),
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    addInCart: (state, { product, count }) => {
      if (!state.cart.has(product)) {
        state.cart.set(product, count);
      } else {
        state.cart.set(product, state.cart.get(product) + count);
      }
    },
  },
  actions: {
    async getProducts({ commit }) {
      const products = await ApiService.getProducts();

      const images = [
        6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
        6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
      ];

      const names = [
        'infantine',
        'blunderbuss',
        'guttling',
        'fickly',
        'dehydrators',
        'exacerbate',
        'teaks',
        'prigging',
        'dhobis',
        'indifferent',
        'plunkers',
        'prissiness',
        'hornwort',
        'reconveyed',
        'prebook',
        'chimeres',
        'hypermanias',
        'redoing',
        'boilersuits',
        'schematizations',
        'glucagons',
        'succinates',
        'extrinsic',
        'climatic',
        'paralytics',
        'oviform',
        'overbraked',
        'trophallaxes',
        'who',
        'misdirecting',
      ];

      const updatedProducts = products.map((product, index) => {
        product.image = `${
          images[Math.floor(Math.random() * images.length)]
        }.webp`;

        product.name = names[index];
        product.price = Math.floor(Math.random() * (1000 - 50) + 50);
        return product;
      });

      commit('setProducts', updatedProducts);
    },
  },
});
