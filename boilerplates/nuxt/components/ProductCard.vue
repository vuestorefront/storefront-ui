<template>
  <a href="/" class="min-w-[148px] large:min-w-[180px] border border-gray-200 rounded-md">
    <img
      class="w-full rounded-md"
      :src="image"
      :alt="alt"
      loading="lazy"
      width="180"
      height="180"
    >
    <div class="p-1 large:p-2 border-gray-200 border-t-[1px]">
      <RatingBase :max="max" :reviews="reviews" :value="value" />
      <span href="/" class="block text-sm font-normal leading-5 font-body">{{ label }}</span>
      <span
        class="text-sm font-bold leading-5 font-body"
        :class="oldPrice ? 'text-secondary-700' : 'text-gray-900'"
      >{{ price }}</span>
      <span class="ml-1 text-xs font-normal leading-4 text-gray-500 line-through large:ml-2">{{ oldPrice }}</span>
    </div>
  </a>
</template>

<script>
import RatingBase from '../components/Rating/RatingBase.vue';

export default {
  name: 'ProductCard',
  components: {
    RatingBase
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    reviews: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    oldPrice: {
      type: String,
      default: ''
    }
  }
};
</script>
