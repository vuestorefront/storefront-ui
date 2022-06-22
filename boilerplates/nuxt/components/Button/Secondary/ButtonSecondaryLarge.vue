<template>
  <button
    v-focus
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium uppercase bg-white border border-gray-200 rounded-md cursor-pointer hover:border-primary-300 active:border-primary-400 text-primary-500 shadow-base disabled:border-0 hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 font-body hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js';

export default {
  name: 'ButtonSecondaryLarge',
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
