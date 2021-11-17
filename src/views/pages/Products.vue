<template>
  <div class="container">
    <div class="products">
      <template v-if="products.length">
        <Product
          v-for="product in products"
          :product="product"
          :key="product.uid"
        />
      </template>
      <template v-else> loading... </template>
    </div>
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
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
