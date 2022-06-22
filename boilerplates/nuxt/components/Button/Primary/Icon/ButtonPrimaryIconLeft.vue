<template>
  <button
    v-focus
    :disabled="disabled"
    class="inline-flex items-center justify-center cursor-pointer bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body text-base font-medium pr-[16px] pl-[14px] py-2 rounded-md shadow-base hover:shadow-medium disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js';

export default {
  name: 'ButtonPrimaryIconLeft',
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
