<template>
  <div class="purchased-product__card">
    <img :src="image" class="purchased-product__image" :alt="product.image" />
    <div class="purchased-product__info">
      <a href="#" class="product__name">{{ innerProduct.dish }}</a>
      <p class="purchased-product__price">{{ innerProduct.price }} &#8381;</p>
      <ProductCounter :count.sync="innerProduct.count" />
      <p>Сумма: {{ innerProduct.count * innerProduct.price }} &#8381;</p>
      <button class="button" @click="removeProduct">Удалить</button>
    </div>
  </div>
</template>
<script>
import ProductCounter from '@/views/components/ProductCounter';

export default {
  name: 'PurchasedProduct',
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
      innerProduct: this.product,
    };
  },
  methods: {
    removeProduct() {
      this.$store.commit('removeFromCart', this.product);
    },
  },
  watch: {
    innerProduct: {
      handler(value) {
        this.$store.commit('updateProductInCart', value);
        this.$store.dispatch('updateTotal');
      },
      deep: true,
    },
  },
};
</script>
