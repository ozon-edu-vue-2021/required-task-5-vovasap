<template>
  <div>
    <div class="products">
      <template v-if="products.length">
        <Product
          v-for="product in products"
          :product="product"
          :key="product.uid"
        />
      </template>
      <template v-else> нет товаров в избранном </template>
    </div>
  </div>
</template>
<script>
import Product from '@/views/components/Product';

export default {
  name: 'Favorites',
  components: {
    Product,
  },
  computed: {
    products() {
      return this.$store.getters['products'].filter(
        (product) => product.favorite
      );
    },
  },
};
</script>
