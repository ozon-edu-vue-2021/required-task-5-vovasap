<template>
  <div class="product__card">
    <div class="product__wrapper-image">
      <img :src="image" class="product__image" :alt="product.image" />
    </div>
    <p class="product__price">{{ product.price }} &#8381;</p>
    <a href="#" class="product__name">{{ product.name }}</a>
    <input class="product__add" type="button" value="В корзину" />
  </div>
</template>
<script>
export default {
  name: 'Product',
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: require(`../../assets/images/${this.product.image}`),
    };
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
  border: none;
  line-height: 3;
  color: #fff;
  background-color: #ff1493;
  cursor: pointer;
}
.product__add:hover {
  background-color: #ff2d9d;
}
.product__add:active {
  background-color: #ff37a2;
}
</style>
