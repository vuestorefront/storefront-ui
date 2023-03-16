<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfTooltipPlacement, VsfDropdownInternal, VsfDropdownInternalTriggerEvent } from '@storefront-ui/vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
  placement: {
    type: String as PropType<`${VsfTooltipPlacement}`>,
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
</script>

<template>
  <VsfDropdownInternal
    :model-value="modelValue"
    class="vsf-tooltip"
    :placement="placement"
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
