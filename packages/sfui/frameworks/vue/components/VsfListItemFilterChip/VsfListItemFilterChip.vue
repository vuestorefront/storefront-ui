<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import type { PropType } from 'vue';
import { VsfListItemFilterChipVariant } from './types';
import { VsfListItemMenu } from '../VsfListItemMenu';
import { VsfChip, VsfChipSize } from '../VsfChip';
import { VsfChipThumbnail, VsfChipThumbnailSize } from '../VsfChipThumbnail';
import { extractProps } from '../../shared/props';

const props = defineProps({
  ...extractProps(VsfListItemMenu, ['label', 'counter', 'size', 'secondaryText', 'disabled', 'truncate'] as const),
  // TODO: issue with typing because one component has defineEmits
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...extractProps(VsfChip as any, ['size', 'modelValue', 'value'] as const),
  ...extractProps(VsfChipThumbnail, ['color'] as const),
  variant: {
    type: String as PropType<`${VsfListItemFilterChipVariant}`>,
    default: VsfListItemFilterChipVariant.left,
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
  <li class="list-item-filter-chip" data-testid="list-item-filter-chip">
    <VsfListItemMenu
      v-bind="{ label, secondaryText, counter, size, disabled, truncate }"
      tag="label"
      :selected="isChecked"
    >
      <template v-if="variant === VsfListItemFilterChipVariant.left" #prefix>
        <VsfChip
          label-tag="span"
          :value="value"
          :size="VsfChipSize.sm"
          :disabled="disabled"
          :model-value="modelValue"
          class="list-item-filter-chip__chip"
          @update:model-value="$emit('update:modelValue', $event)"
        >
          <template #prefix>
            <VsfChipThumbnail :color="color" :size="VsfChipThumbnailSize.sm" />
          </template>
        </VsfChip>
      </template>
      <template v-if="variant === VsfListItemFilterChipVariant.right" #suffix>
        <VsfChip
          label-tag="span"
          :value="value"
          :size="VsfChipSize.sm"
          :disabled="disabled"
          :model-value="modelValue"
          class="list-item-filter-chip__chip"
          @update:model-value="$emit('update:modelValue', $event)"
        >
          <template #prefix>
            <VsfChipThumbnail :color="color" :size="VsfChipThumbnailSize.sm" />
          </template>
        </VsfChip>
      </template>
      <slot />
      <template #secondaryText><slot name="secondaryText" /></template>
    </VsfListItemMenu>
  </li>
</template>
