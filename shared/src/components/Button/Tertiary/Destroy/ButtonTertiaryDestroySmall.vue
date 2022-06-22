<template>
  <button
    v-focus
    class="inline-flex items-center justify-center cursor-pointer bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm font-body font-medium rounded-md outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js';

export default {
  name: 'ButtonTertiaryDestroySmall',
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
