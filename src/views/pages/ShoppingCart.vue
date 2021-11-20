<template>
  <div>
    <template v-if="hasProducts">
      <section class="shopping-card__transaction">
        <button class="button" @click="pay">Оформить</button>
        <span>Общая сумма: {{ total }}</span>
      </section>
      <PurchasedProduct
        v-for="product in products"
        :product="product"
        :key="product.uid"
      />
    </template>
    <template v-else> сначала добавьте товар в корзину </template>
  </div>
</template>
<script>
import PurchasedProduct from '@/views/components/PurchasedProduct';

export default {
  name: 'ShoppingCart',
  components: {
    PurchasedProduct,
  },
  computed: {
    total() {
      return this.$store.getters['total'];
    },
    hasProducts() {
      return !!Object.keys(this.products).length;
    },
    products() {
      return this.$store.getters['cart'];
    },
  },
  methods: {
    pay() {
      alert(
        Object.values(this.products)
          .filter((product) => !!product.count)
          .map((product) => product.dish)
          .join(', '),
      );
    },
  },
};
</script>
