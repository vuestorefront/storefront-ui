<template>
  <button
    v-focus
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium uppercase bg-white border rounded-md shadow cursor-pointer border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 disabled:bg-gray-200 text-rose-600 hover:text-rose-600 active:text-rose-700 disabled:text-gray-500 disabled:opacity-50 font-body hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js';

export default {
  name: 'ButtonDestroySecondaryLarge',
  directives: {
    focus
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
