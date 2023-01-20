<script lang="ts" setup>
import type { PropType } from 'vue';
import { toRefs, computed } from 'vue';
import { VsfChipSize } from './types';
import VsfIconClose from '../VsfIcons/VsfIconClose.vue';
import { VsfIconSize } from '../VsfIconBase/types';

const props = defineProps({
  deletable: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<`${VsfChipSize}`>,
    default: VsfChipSize.base,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Boolean, Array] as PropType<string[] | boolean>,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});
const { size } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', param: boolean): void;
}>();

const onSelected = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked);
};

const getIconSize = computed((): VsfIconSize => {
  switch (size.value) {
    case VsfChipSize.sm:
      return VsfIconSize.sm;
    default:
      return VsfIconSize.base;
  }
});
</script>

<template>
  <label v-if="!deletable || modelValue" class="vsf-chip" :class="`vsf-chip--size-${size}`" data-testid="chip">
    <input
      class="peer vsf-chip__input"
      type="checkbox"
      :disabled="disabled"
      :value="value"
      :checked="!disabled && modelValue"
      data-testid="chip-input"
      @change="onSelected"
    />
    <div class="vsf-chip__peer-wrapper">
      <div v-if="$slots.prefix" class="vsf-chip__prefix">
        <slot name="prefix" />
      </div>
      <span v-if="label" class="vsf-chip__label">{{ label }}</span>
      <VsfIconClose v-if="deletable && !disabled" :size="getIconSize" class="vsf-chip__close-icon" />
    </div>
  </label>
</template>
