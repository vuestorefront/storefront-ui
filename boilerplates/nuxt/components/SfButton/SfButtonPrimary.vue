<template>
  <button
    v-on-key-stroke="keyHandler"
    ref="el"
    class="inline-flex items-center justify-center cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-gray-200 text-white disabled:text-gray-500 disabled:opacity-50 uppercase font-body text-base font-medium px-[16px] py-2 rounded-md shadow hover:shadow-md disabled:shadow-none disabled:cursor-not-allowed outline-violet"
    :class="{'outline-none': styleFocus}"
  >
    <slot />
  </button>
</template>

<script>
import { vOnKeyStroke } from '@vueuse/components'

export default {
  name: 'SfButtonPrimary',
  data() {
    return {
      styleFocus: true
    }
  },
  directives: {
    vOnKeyStroke
  },
  methods: {
    keyHandler(e, el) {
      if (e === 'Tab') {
        this.styleFocus = false
        el.focus()
      }
    }
  }
}
</script>
