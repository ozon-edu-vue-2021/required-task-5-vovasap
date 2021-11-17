<template>
  <div>
    <pre>{{ product }}</pre>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Product',
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
