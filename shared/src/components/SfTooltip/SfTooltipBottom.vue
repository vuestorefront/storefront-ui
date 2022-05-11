<template>
  <div class="relative">
    <div
      class="z-50 bg-gray-500 max-w-xs font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5 right-0 bottom-full"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      <svg
        class="absolute text-gray-500 h-2 w-full left-0 bottom-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xml:space="preserve"
        transform="rotate(180)"
      ><polygon class="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
    </div>
  </div>
</template>

<script>
import { focus } from '../../utils/focus-directive'

export default {
  name: 'SfTooltipBottom',
  directives: {
    focus
  }
}
</script>
