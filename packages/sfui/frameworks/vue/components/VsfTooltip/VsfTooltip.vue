<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';
import { VsfTooltipPlacement } from './types';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '../VsfDropdownInternal';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placement: {
    type: String as PropType<VsfTooltipPlacement>,
    default: VsfTooltipPlacement.bottom,
  },
  hidePointer: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();
const tooltipPlacement = computed(() => {
  switch (props.placement) {
    case VsfTooltipPlacement.top:
      return VsfDropdownInternalPlacement.top;

    case VsfTooltipPlacement.right:
      return VsfDropdownInternalPlacement.right;

    case VsfTooltipPlacement.left:
      return VsfDropdownInternalPlacement.left;

    default:
      return VsfDropdownInternalPlacement.bottom;
  }
});
</script>

<template>
  <VsfDropdownInternal
    :model-value="modelValue"
    class="vsf-tooltip"
    :placement="tooltipPlacement"
    :trigger-event="VsfDropdownInternalTriggerEvent.hover"
    data-testid="tooltip"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #trigger>
      <div class="vsf-tooltip__trigger"><slot /></div>
    </template>
    <slot name="label">
      <div
        role="tooltip"
        :class="[
          `vsf-tooltip__label vsf-tooltip__label--${placement}`,
          { 'vsf-tooltip__label--without-pointer': hidePointer },
        ]"
        data-testid="tooltip-label"
      >
        {{ label }}
      </div>
    </slot>
  </VsfDropdownInternal>
</template>
