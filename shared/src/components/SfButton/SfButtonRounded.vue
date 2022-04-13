<template>
  <button
    v-focus
    class="inline-flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase p-[10px] rounded-full shadow hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../utils/focus-directive.js'

export default {
  name: 'SfButtonRounded',
  directives: {
    focus
  }
}
</script>
