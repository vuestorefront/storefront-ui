<template>
  <button
    v-focus
    class="inline-flex items-center justify-center cursor-pointer bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase rounded-md font-body text-base font-medium px-[16px] py-2 shadow-base hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimaryDestroy',
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
