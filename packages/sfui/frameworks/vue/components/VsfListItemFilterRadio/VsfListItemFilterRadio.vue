<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfListItemMenu } from '../VsfListItemMenu';
import { VsfRadio } from '../VsfRadio';
import { extractProps } from '../../shared/props';
import { VsfListItemFilterRadioVariant } from './types';

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
  // TODO: issue with typing because one component has defineEmits
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...extractProps(VsfRadio as any, ['value', 'name'] as const),
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
  <VsfListItemMenu
    tag="li"
    v-bind="props"
    :selected="modelValue === value"
    @click="$emit('update:modelValue', toggle(value, modelValue))"
  >
    <template v-if="variant === VsfListItemFilterRadioVariant.left" #prefix>
      <VsfRadio
        :value="value"
        :model-value="modelValue"
        :aria-label="label"
        @click.stop="$emit('update:modelValue', toggle(value, modelValue))"
      />
    </template>
    <template v-if="variant === VsfListItemFilterRadioVariant.right" #suffix>
      <VsfRadio
        :value="value"
        :model-value="modelValue"
        :aria-label="label"
        @click.stop="$emit('update:modelValue', toggle(value, modelValue))"
      />
    </template>
    <slot />
    <template #secondaryText><slot name="secondaryText" /></template>
  </VsfListItemMenu>
</template>
