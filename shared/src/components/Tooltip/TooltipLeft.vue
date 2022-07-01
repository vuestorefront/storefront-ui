<template>
  <div class="relative flex items-center group">
    <slot>
      <ButtonPrimary aria-describedby="tooltip-left">
        Hover me
      </ButtonPrimary>
    </slot>
    <div
      id="tooltip-left"
      role="tooltip"
      class="absolute left-0 items-center hidden ml-32 group-hover:flex"
    >
      <div class="w-2 h-2 -mr-1 rotate-45 bg-gray-500" />
      <div class="relative z-10 whitespace-no-wrap bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '../Button/Primary/ButtonPrimary.vue';
export default {
  name: 'TooltiptLeft',
  components: {
    ButtonPrimary
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
};
</script>
