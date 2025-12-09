<script lang="ts" setup>
import { type PropType, toRefs, watch } from 'vue';
import type { Middleware } from '@floating-ui/vue';
import { useTooltip, type SfPopoverPlacement, type SfPopoverStrategy } from '@storefront-ui/vue';

const props = defineProps({
  placement: {
    type: String as PropType<`${SfPopoverPlacement}` | undefined>,
    default: undefined,
  },
  middleware: {
    type: Array as PropType<Middleware[] | undefined>,
    default: undefined,
  },
  strategy: {
    type: String as PropType<`${SfPopoverStrategy}` | undefined>,
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
  id: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', open: boolean): void;
}>();

const { placement, middleware, strategy, modelValue } = toRefs(props);
const { isOpen, close, open, triggerProps, tooltipProps, arrowProps } = useTooltip({ placement, middleware, strategy });

watch(modelValue, (newVal) => {
  if (newVal) open();
  else close();
}, { immediate: true });

watch(isOpen, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>
<template>
  <span data-testid="tooltip" v-bind="triggerProps">
    <slot />
    <div
      v-if="label && isOpen"
      :id="id"
      role="tooltip"
      class="bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow-sm"
      v-bind="tooltipProps"
    >
      {{ label }}
      <span v-if="showArrow" v-bind="arrowProps" class="rotate-45 bg-black" />
    </div>
  </span>
</template>
