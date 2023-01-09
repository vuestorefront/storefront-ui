<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfDropdownInternalTriggerEvent, VsfDropdownInternalPlacement } from './types';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  triggerEvent: {
    type: String as PropType<VsfDropdownInternalTriggerEvent>,
    default: VsfDropdownInternalTriggerEvent.click,
  },
  placement: {
    type: String as PropType<VsfDropdownInternalPlacement>,
    default: VsfDropdownInternalPlacement.bottom,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // TODO: proper class type
  dropdownClass: {
    type: String,
    default: '',
  },
});

defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();
</script>

<template>
  <div
    :class="[
      'vsf-dropdown-internal',
      `vsf-dropdown-internal--${placement}`,
      { 'vsf-dropdown-internal--disabled': disabled },
    ]"
    v-bind="{
      ...(triggerEvent === VsfDropdownInternalTriggerEvent.hover && {
        onMouseenter: () => $emit('update:modelValue', true),
        onMouseleave: () => $emit('update:modelValue', false),
      }),
    }"
    data-testid="dropdown"
  >
    <div
      data-testid="dropdown-trigger"
      :class="['vsf-dropdown-internal__trigger', dropdownClass]"
      v-bind="{
        ...(triggerEvent === VsfDropdownInternalTriggerEvent.click && {
          onClick: () => $emit('update:modelValue', !modelValue),
        }),
      }"
    >
      <slot name="trigger" />
    </div>
    <div v-if="modelValue" class="vsf-dropdown-internal__dropdown" data-testid="dropdown-dropdown">
      <slot />
    </div>
  </div>
</template>
