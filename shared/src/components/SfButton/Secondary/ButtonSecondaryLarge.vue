<template>
  <button
    v-focus
    class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-500 uppercase bg-white border border-green-400 rounded-md shadow cursor-pointer disabled:border-0 hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 hover:text-green-500 active:text-green-600 disabled:text-gray-500 disabled:opacity-50 font-body hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js'

export default {
  name: 'SfButtonSecondary',
  directives: {
    focus
  }
}
</script>