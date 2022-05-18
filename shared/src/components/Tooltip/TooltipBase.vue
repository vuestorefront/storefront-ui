<template>
  <div class="relative flex flex-col items-center group">
    <ButtonPrimary>Hover me</ButtonPrimary>
    <div class="absolute bottom-0 justify-center items-center hidden mb-14 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5">
      <div>Tooltip text</div>
      <div class="absolute w-2 h-2 bottom-0 -mb-1 rotate-45 bg-gray-500" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../Button/Primary/ButtonPrimary.vue'
export default {
  name: 'TooltipBase',
  components: {
    ButtonPrimary
  }
}
</script>
