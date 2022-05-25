<template>
  <div class="relative flex items-center group">
    <div
      id="tooltip-right"
      role="tooltip"
      class="absolute items-center hidden mr-2 group-hover:flex"
    >
      <div class="relative z-10 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5">
        Tooltip text
      </div>
      <div class="w-2 h-2 -ml-1 rotate-45 bg-gray-500" />
    </div>
    <ButtonPrimary
      aria-describedby="tooltip-right"
      class="ml-28"
    >
      Hover me
    </ButtonPrimary>
  </div>
</template>

<script>
import ButtonPrimary from '../Button/Primary/ButtonPrimary.vue';
export default {
  name: 'TooltiptRight',
  components: {
    ButtonPrimary
  }
};
</script>
