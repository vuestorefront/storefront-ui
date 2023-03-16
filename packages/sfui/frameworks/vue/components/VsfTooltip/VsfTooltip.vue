<script lang="ts" setup>
import { type PropType, toRefs } from 'vue';
import type { Middleware } from '@floating-ui/vue';
import { useTooltip, type VsfPopoverPlacement, type VsfPopoverStrategy } from '@storefront-ui/vue';

const props = defineProps({
  placement: {
    type: String as PropType<VsfPopoverPlacement | undefined>,
    default: undefined,
  },
  middleware: {
    type: Array as PropType<Middleware[] | undefined>,
    default: undefined,
  },
  strategy: {
    type: String as PropType<VsfPopoverStrategy | undefined>,
    default: undefined,
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
});

const { placement, middleware, strategy } = toRefs(props);
const { isOpen, triggerProps, tooltipProps, arrowProps } = useTooltip({ placement, middleware, strategy });
</script>
<template>
  <span v-bind="triggerProps">
    <slot />
    <div
      v-if="label && isOpen"
      role="tooltip"
      class="bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow"
      v-bind="tooltipProps"
    >
      {{ label }}
      <span v-if="showArrow" v-bind="arrowProps" class="bg-black rotate-45" />
    </div>
  </span>
</template>
