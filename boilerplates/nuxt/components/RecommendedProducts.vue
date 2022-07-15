<template>
  <div class="flex overflow-x-auto">
    <ProductCard
      v-for="({image, alt, max, value, reviews, label, price, oldPrice}, i) in recommendedProducts"
      :key="`${label}-${i}`"
      :image="require(`~/assets/images/${image}.webp`)"
      :alt="alt"
      :label="label"
      :max="max"
      :value="value"
      :reviews="reviews"
      :price="price"
      :old-price="oldPrice"
      class="mx-1"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  name: 'RecommendedProducts',
  components: {
    ProductCard
  },
  props: {
    recommendedProducts: {
      type: Array,
      default: () => []
    }
  }
};
</script>
