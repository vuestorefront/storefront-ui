<template>
  <button
    v-focus
    class="inline-flex items-center justify-center p-3 text-base font-normal bg-transparent rounded-md cursor-pointer text-primary-500 hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js';

export default {
  name: 'ButtonTertiaryLarge',
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
