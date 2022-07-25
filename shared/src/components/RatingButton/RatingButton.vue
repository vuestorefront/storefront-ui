<template>
  <fieldset
    v-focus
    class="inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400"
  >
    <input
      v-for="star in max"
      :key="`star-${star}+${uid}`"
      :aria-label="`Rating star ${star} of ${max}`"
      type="radio"
      name="rating-1"
      :value="star"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      @change="$emit('rating-changed', value)"
    >
  </fieldset>
</template>

<script>
import { getCurrentInstance } from '@nuxtjs/composition-api';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'RatingButton',
  directives: {
    focus
  },
  props: {
    max: {
      type: Number,
      default: 5
    }
  },
  setup() {
    const uid = getCurrentInstance().uid;
    return {
      uid
    };
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
