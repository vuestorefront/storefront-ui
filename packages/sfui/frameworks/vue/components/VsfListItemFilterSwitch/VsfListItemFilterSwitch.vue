<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { VsfListItemMenu } from '../VsfListItemMenu';
import { VsfSwitch } from '../VsfSwitch';
import { VsfListItemFilterSwitchVariant } from './types';
import { extractProps } from '../../shared/props';

const props = defineProps({
  ...extractProps(VsfListItemMenu, ['label', 'counter', 'size', 'secondaryText', 'disabled', 'truncate'] as const),
  // TODO: issue with typing because one component has defineEmits
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...extractProps(VsfSwitch as any, ['value', 'name', 'modelValue'] as const),
  variant: {
    type: String as PropType<`${VsfListItemFilterSwitchVariant}`>,
    default: VsfListItemFilterSwitchVariant.left,
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
  <li class="list-item-filter-switch" data-testid="list-item-filter-switch">
    <VsfListItemMenu
      v-bind="{ label, secondaryText, counter, size, disabled, truncate }"
      tag="label"
      :selected="isChecked"
    >
      <template v-if="variant === VsfListItemFilterSwitchVariant.left" #prefix>
        <VsfSwitch
          label-tag="span"
          :value="value"
          :name="name"
          :disabled="disabled"
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </template>
      <template v-if="variant === VsfListItemFilterSwitchVariant.right" #suffix>
        <VsfSwitch
          label-tag="span"
          :value="value"
          :name="name"
          :disabled="disabled"
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
        />
      </template>
      <slot />
      <template #secondaryText><slot name="secondaryText" /></template>
    </VsfListItemMenu>
  </li>
</template>
