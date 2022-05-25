<template>
  <button
    v-focus
    class="inline-flex items-center justify-center cursor-pointer border border-green-400 disabled:border-0 bg-white hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 text-green-500 hover:text-green-500 active:text-green-600 disabled:text-gray-500 disabled:opacity-50 uppercase px-[16px] py-2 rounded-md font-body text-base font-medium shadow-base hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js';

export default {
  name: 'ButtonSecondary',
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
