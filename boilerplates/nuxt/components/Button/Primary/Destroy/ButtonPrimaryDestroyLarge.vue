<template>
  <button
    v-focus
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white uppercase rounded-md shadow-base cursor-pointer bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 font-body hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimaryDestroyLarge',
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
