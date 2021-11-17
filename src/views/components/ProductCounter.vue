<template>
  <div class="product-counter">
    <button class="product-counter__button button" @click="$emit('decrease')">
      -
    </button>
    <p class="product-counter__count">{{ count }}</p>
    <button class="product-counter__button button" @click="$emit('increase')">
      +
    </button>
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
};
</script>
