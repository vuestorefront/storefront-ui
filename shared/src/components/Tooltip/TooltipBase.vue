<template>
  <div class="relative flex flex-col items-center group">
    <ButtonBase aria-describedby="tooltip-base">
      Hover me
    </ButtonBase>
    <div
      id="tooltip-base"
      role="tooltip"
      class="absolute bottom-0 justify-center items-center hidden mb-14 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5"
    >
      <div>Tooltip text</div>
      <div class="absolute bottom-0 w-2 h-2 -mb-1 rotate-45 bg-gray-500" />
    </div>
  </div>
</template>

<script>
import ButtonBase from '../Button/ButtonBase.vue';
export default {
  name: 'TooltipBase',
  components: {
    ButtonBase
  }
};
</script>
