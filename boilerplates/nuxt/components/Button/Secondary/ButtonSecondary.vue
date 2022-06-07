<template>
  <button
    v-focus
    class="inline-flex items-center justify-center cursor-pointer border border-gary-200 hover:border-primary-300 active:border-primary-400 disabled:border-0 bg-white hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 text-primary-500 hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 uppercase px-[16px] py-2 rounded-md font-body text-base font-medium shadow-base hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
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
