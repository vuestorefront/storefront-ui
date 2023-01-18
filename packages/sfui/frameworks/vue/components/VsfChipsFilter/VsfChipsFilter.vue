<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfChipsFilterVariant } from './types';

defineProps({
  type: {
    type: String,
    default: 'checkbox',
  },
  size: {
    type: String as PropType<`${VsfChipsFilterVariant}`>,
    default: VsfChipsFilterVariant.base,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <label class="vsf-chips-filter" :class="`vsf-chips-filter--size-${size}`">
    <input
      class="peer vsf-chips-filter__input"
      :type="type"
      :name="name"
      :disabled="disabled"
      :value="modelValue"
      @change="onChange"
    />
    <div class="vsf-chips-filter__peer-wrapper">
      <div v-if="$slots.thumbnail" class="vsf-chips-filter__thumbnail">
        <slot name="thumbnail" />
      </div>

      <span v-if="label" class="vsf-chips-filter__label">{{ label }}</span>
    </div>
  </label>
</template>
