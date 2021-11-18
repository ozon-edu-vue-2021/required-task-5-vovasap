<template>
  <div class="purchased-product__card">
    <img :src="image" class="purchased-product__image" :alt="product.image" />
    <div class="purchased-product__info">
      <a href="#" class="product__name">{{ innerProduct.name }}</a>
      <p class="purchased-product__price">{{ innerProduct.price }} &#8381;</p>
      <ProductCounter :count.sync="innerProduct.count" />
      <p>Сумма: {{ innerProduct.count * innerProduct.price }} &#8381;</p>
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
  watch: {
    innerProduct: {
      handler(value) {
        this.$store.commit('updateProduct', value);
        this.$store.dispatch('updateTotal');
      },
      deep: true,
    },
  },
};
</script>
<style>
.purchased-product__card {
  display: flex;
  margin-bottom: 10px;
}
.purchased-product__image {
  max-width: 200px;
  object-fit: contain;
}
.purchased-product__info {
  padding: 10px;
}
</style>
