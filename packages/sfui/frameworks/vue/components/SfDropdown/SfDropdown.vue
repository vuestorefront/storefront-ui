<script lang="ts" setup>
import { type PropType, toRefs } from 'vue';
import type { Middleware } from '@floating-ui/vue';
import { useDropdown, type SfPopoverPlacement, type SfPopoverStrategy } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String as PropType<SfPopoverPlacement | undefined>,
    default: undefined,
  },
  middleware: {
    type: Array as PropType<Middleware[] | undefined>,
    default: undefined,
  },
  strategy: {
    type: String as PropType<SfPopoverStrategy | undefined>,
    default: undefined,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const { modelValue, placement, middleware, strategy } = toRefs(props);
const {
  referenceRef,
  floatingRef,
  style: dropdownStyle,
} = useDropdown({
  isOpen: modelValue,
  placement,
  middleware,
  strategy,
  onClose: () => emit('update:modelValue', false),
});
</script>
<template>
  <div ref="referenceRef" class="w-max">
    <slot name="trigger" />
    <div v-if="modelValue" ref="floatingRef" :style="dropdownStyle" :aria-hidden="!modelValue || undefined">
      <slot />
    </div>
  </div>
</template>
