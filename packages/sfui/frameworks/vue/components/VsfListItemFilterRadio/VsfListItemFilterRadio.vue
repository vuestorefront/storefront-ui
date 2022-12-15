<script lang="ts" setup>
import VsfListItemMenu from '../VsfListItemMenu';
import VsfRadio from '../VsfRadio/VsfRadio.vue';
import { extractProps } from '../../shared/utils/props';
import { VsfListItemFilterRadioVariant } from './types';
import type { PropType } from 'vue';

const props = defineProps({
  ...extractProps(VsfListItemMenu, [
    'label',
    'counter',
    'size',
    'secondaryText',
    'disabled',
    'truncate',
    'selected',
  ] as const),
  ...extractProps(VsfRadio, ['value', 'name'] as const),
  modelValue: {
    type: String,
    default: '',
  },
  variant: {
    type: String as PropType<VsfListItemFilterRadioVariant>,
    default: VsfListItemFilterRadioVariant.left,
  },
});

defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const toggle = (value: string, modelValue: string) => {
  return modelValue === value ? '' : value;
};
</script>

<template>
  <VsfListItemMenu v-bind="props" tag="li" @click="$emit('update:modelValue', toggle(value, modelValue))">
    <template v-if="variant === VsfListItemFilterRadioVariant.left" #prefix>
      <VsfRadio
        :value="value"
        :model-value="modelValue"
        @click.stop="$emit('update:modelValue', toggle(value, modelValue))"
      />
    </template>
    <template v-if="variant === VsfListItemFilterRadioVariant.right" #suffix>
      <VsfRadio
        :value="value"
        :model-value="modelValue"
        @click.stop="$emit('update:modelValue', toggle(value, modelValue))"
      />
    </template>
    <slot />
    <template #secondaryText><slot name="secondaryText" /></template>
  </VsfListItemMenu>
</template>
