<template>
  <div class="product__card">
    <div class="product__wrapper-image">
      <span
        class="heart"
        :class="{ favorite: product.favorite }"
        @click="toggleFavorite"
        >&#9829;</span
      >
      <img :src="image" class="product__image" :alt="product.image" />
    </div>
    <p class="product__price">{{ product.price }} &#8381;</p>
    <a href="#" class="product__name">{{ product.dish }}</a>
    <ProductCounter :count.sync="count" />
    <button class="product__add button" @click="addInCart">В корзину</button>
  </div>
</template>
<script>
import ProductCounter from '@/views/components/ProductCounter';

export default {
  name: 'Product',
  components: {
    ProductCounter,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: require(`../../assets/images/${this.product.image}`),
      count: 1,
    };
  },
  methods: {
    addInCart() {
      this.$store.commit('addInCart', {
        ...this.product,
        count: this.count,
      });
      this.$store.dispatch('updateTotal');
    },
    toggleFavorite() {
      this.$store.commit('updateProduct', {
        ...this.product,
        favorite: !this.product.favorite,
      });
    },
  },
};
</script>
