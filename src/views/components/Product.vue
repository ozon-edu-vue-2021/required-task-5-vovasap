<template>
  <div class="product__card">
    <div class="product__wrapper-image">
      <img :src="image" class="product__image" :alt="product.image" />
    </div>
    <p class="product__price">{{ product.price }} &#8381;</p>
    <a href="#" class="product__name">{{ product.name }}</a>
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
        product: this.product,
        count: this.count,
      });
    },
  },
};
</script>
<style>
.product__card {
  max-width: 300px;
}
.product__wrapper-image {
  position: relative;
  min-width: 150px;
  height: content-box;
}
.product__image {
  width: 100%;
  max-width: 300px;
  height: auto;
}
.product__price {
  margin: 0 0 10px;
  text-align: end;
  font-size: 30px;
}
.product__name {
  display: block;
  margin-bottom: 10px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
}
.product__name:hover {
  color: #ff1493;
  cursor: pointer;
}
.product__add {
  width: 100%;
}
.product-counter {
  display: flex;
  margin-bottom: 10px;
}
.product-counter__count {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-top: 2px solid #ff37a2;
  border-bottom: 2px solid #ff37a2;
}
.product-counter__button {
  width: 20%;
}
.button {
  border: none;
  line-height: 3;
  color: #fff;
  background-color: #ff1493;
  cursor: pointer;
}
.button:hover {
  background-color: #ff2d9d;
}
.button:active {
  background-color: #ff37a2;
}
</style>
