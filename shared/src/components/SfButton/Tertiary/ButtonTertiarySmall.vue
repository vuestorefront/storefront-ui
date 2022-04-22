<template>
  <button
    v-focus
    class="inline-flex items-center justify-center leading-5 px-3 py-[6px] text-sm font-medium text-green-500 bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet"
  >
    <slot />
  </button>
</template>

<script>
import { focus } from '../../../utils/focus-directive.js'

export default {
  name: 'SfButtonTertiary',
  directives: {
    focus
  }
}
</script>