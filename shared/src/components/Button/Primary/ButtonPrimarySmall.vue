<template>
  <button
    v-focus
    :disabled="disabled"
    class="inline-flex items-center justify-center cursor-pointer bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body font-medium rounded-md shadow-base hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed leading-5 px-3 py-[6px] text-sm outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimarySmall',
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
