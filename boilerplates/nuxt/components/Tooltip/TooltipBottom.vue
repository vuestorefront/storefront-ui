<template>
  <div class="relative flex flex-col items-center group">
    <ButtonPrimary aria-describedby="tooltip-bottom">
      Hover me
    </ButtonPrimary>
    <div
      id="tooltip-bottom"
      role="tooltip"
      class="absolute bottom-0 justify-center items-center hidden -mb-12 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5"
    >
      <div>Tooltip text</div>
      <div class="absolute w-2 h-2 top-0 -mt-1 rotate-45 bg-gray-500" />
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../Button/ButtonBase.vue';
export default {
  name: 'TooltipBottom',
  components: {
    ButtonPrimary
  }
};
</script>
