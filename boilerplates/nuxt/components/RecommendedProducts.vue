<template>
  <div class="flex overflow-x-auto">
    <!-- <ProductCard
      v-for="({image, alt, max, value, reviews, label, price, oldPrice}, i) in recommendedProducts"
      :key="i"
      :image="require(`~/assets/images/${image}.png`)"
      :alt="alt"
      :label="label"
      :max="max"
      :value="value"
      :reviews="reviews"
      :price="price"
      :old-price="oldPrice"
      class="mx-1"
    /> -->
  </div>
</template>

<script>

export default {
  name: 'RecommendedProducts',
  props: {
    recommendedProducts: {
      type: Array,
      default: () => []
    }
  }
};
</script>
