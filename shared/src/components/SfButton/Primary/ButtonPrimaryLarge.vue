<template>
  <button
    v-focus
    :disabled="disabled"
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white uppercase bg-green-500 rounded-md shadow cursor-pointer hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 font-body hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js'

export default {
  name: 'ButtonPrimaryLarge',
  directives: {
    focus
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
