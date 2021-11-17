<template>
  <div>
    <template v-if="products.length">
      <Product
        v-for="product in products"
        :product="product"
        :key="product.uid"
      />
    </template>
    <template v-else> loading... </template>
  </div>
</template>
<script>
import Product from '@/views/components/Product';

export default {
  name: 'Products',
  components: {
    Product,
  },
  computed: {
    products() {
      return this.$store.getters['products'];
    },
  },
};
</script>
