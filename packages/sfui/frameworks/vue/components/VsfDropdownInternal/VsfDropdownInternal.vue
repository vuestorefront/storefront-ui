<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import type { PropType } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { ClassProp } from '../../shared/props';
import { VsfDropdownInternalTriggerEvent, VsfDropdownInternalPlacement } from './types';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  triggerEvent: {
    type: String as PropType<`${VsfDropdownInternalTriggerEvent}`>,
    default: VsfDropdownInternalTriggerEvent.click,
  },
  placement: {
    type: String as PropType<`${VsfDropdownInternalPlacement}`>,
    default: VsfDropdownInternalPlacement.bottom,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  triggerClass: ClassProp,
  dropdownClass: ClassProp,
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();
const { modelValue } = toRefs(props);
const dropdownRef = ref();
const onClose = () => emit('update:modelValue', false);
onClickOutside(dropdownRef, onClose);
</script>

<template>
  <div
    v-bind="{
      ...(triggerEvent === VsfDropdownInternalTriggerEvent.hover && {
        onMouseenter: () => $emit('update:modelValue', true),
        onMouseleave: () => $emit('update:modelValue', false),
      }),
    }"
    ref="dropdownRef"
    :class="[
      'vsf-dropdown-internal',
      `vsf-dropdown-internal--${placement}`,
      { 'vsf-dropdown-internal--disabled': disabled },
    ]"
    data-testid="dropdown"
    @keydown.esc="onClose"
  >
    <div
      data-testid="dropdown-trigger"
      :class="['vsf-dropdown-internal__trigger', triggerClass]"
      v-bind="{
        ...(triggerEvent === VsfDropdownInternalTriggerEvent.click && {
          onClick: () => $emit('update:modelValue', !modelValue),
        }),
      }"
    >
      <slot name="trigger" />
    </div>
    <div v-if="modelValue" :class="['vsf-dropdown-internal__dropdown', dropdownClass]" data-testid="dropdown-dropdown">
      <slot />
    </div>
  </div>
</template>
