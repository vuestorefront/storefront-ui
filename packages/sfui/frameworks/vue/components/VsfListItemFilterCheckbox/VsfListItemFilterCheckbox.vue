<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { VsfListItemMenu } from '../VsfListItemMenu';
import { VsfCheckbox } from '../VsfCheckbox';
import { extractProps } from '../../shared/props';
import { VsfListItemFilterCheckboxVariant } from './types';

const props = defineProps({
  ...extractProps(VsfListItemMenu, ['label', 'counter', 'size', 'secondaryText', 'disabled', 'truncate'] as const),
  // TODO: issue with typing because one component has defineEmits
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...extractProps(VsfCheckbox as any, ['value', 'name', 'modelValue'] as const),
  variant: {
    type: String as PropType<VsfListItemFilterCheckboxVariant>,
    default: VsfListItemFilterCheckboxVariant.left,
  },
});

const { modelValue, value } = toRefs(props);

defineEmits<{
  (event: 'update:modelValue', value: boolean | string[]): void;
}>();

const isChecked = computed(() => {
  if (typeof modelValue.value === 'boolean') return modelValue.value;
  // TODO: add deep comparision for objects
  return modelValue.value.includes(value.value);
});
</script>

<template>
  <li>
    <VsfListItemMenu
      v-bind="{ label, secondaryText, counter, size, disabled, truncate }"
      tag="label"
      :selected="isChecked"
    >
      <template v-if="variant === VsfListItemFilterCheckboxVariant.left" #prefix>
        <VsfCheckbox
          label-tag="div"
          :value="value"
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </template>
      <template v-if="variant === VsfListItemFilterCheckboxVariant.right" #suffix>
        <VsfCheckbox
          label-tag="div"
          :value="value"
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </template>
      <slot />
      <template #secondaryText><slot name="secondaryText" /></template>
    </VsfListItemMenu>
  </li>
</template>
