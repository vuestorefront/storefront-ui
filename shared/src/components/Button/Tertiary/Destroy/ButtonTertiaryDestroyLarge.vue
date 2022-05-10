<template>
  <button
    v-focus
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-transparent rounded-md cursor-pointer hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../../utils/focus-directive.js'

export default {
  name: 'ButtonTertiaryDestroyLarge',
  directives: {
    focus
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
