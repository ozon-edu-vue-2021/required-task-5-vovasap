<template>
  <div class="product-counter">
    <button class="product-counter__button button" @click="decrease">-</button>
    <p class="product-counter__count">{{ innerCount }}</p>
    <button class="product-counter__button button" @click="increase">+</button>
  </div>
</template>
<script>
export default {
  name: 'ProductCounter',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    innerCount: {
      get() {
        return this.count;
      },
      set(value) {
        this.$emit('update:count', value);
      },
    },
  },
  methods: {
    increase() {
      this.innerCount++;
    },
    decrease() {
      if (this.innerCount === 1) return 1;
      this.innerCount--;
    },
  },
};
</script>
