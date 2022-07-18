<template>
  <fieldset
    v-focus
    class="inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400"
  >
    <input
      aria-label="Rating star 1 of 5"
      type="radio"
      name="rating-1"
      value="1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      @change="$emit('rating-changed', value)"
    >
    <input
      aria-label="Rating star 2 of 5"
      type="radio"
      name="rating-1"
      value="2"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      checked
      @change="$emit('rating-changed', value)"
    >
    <input
      aria-label="Rating star 3 of 5"
      type="radio"
      name="rating-1"
      value="3"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      @change="$emit('rating-changed', value)"
    >
    <input
      aria-label="Rating star 4 of 5"
      type="radio"
      name="rating-1"
      value="4"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      @change="$emit('rating-changed', value)"
    >
    <input
      aria-label="Rating star 5 of 5"
      type="radio"
      name="rating-1"
      value="5"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      @change="$emit('rating-changed', value)"
    >
  </fieldset>
</template>

<script>
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'RatingButton',
  directives: {
    focus
  }
};
</script>
<style scoped>
.star-input {
  background-color: #71717A;
  -webkit-mask:  url("../../assets/star-outline.svg");
  mask: url("../../assets/star-outline.svg");
  opacity: 0.5;
}
.star-input:hover,
.star-input:checked,
.rating:hover .star-input:not(.rating .star-input:hover ~ .star-input),
.rating .star-input:not(.rating .star-input:checked ~ .star-input) {
  background-color: #02BB4D;
  -webkit-mask:  url("../../assets/star.svg");
  mask: url("../../assets/star.svg");
  opacity: 1;
}
</style>
