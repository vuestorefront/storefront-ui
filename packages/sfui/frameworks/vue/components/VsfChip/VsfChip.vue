<script lang="ts" setup>
import type { PropType, InputHTMLAttributes } from 'vue';
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
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
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
  labelTag: {
    type: String,
    default: undefined,
  },
});
const { size, modelValue } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', param: InputHTMLAttributes['checked']): void;
}>();

const onSelected = computed({
  get: () => modelValue?.value,
  set: (value) => emit('update:modelValue', value),
});

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
  <component
    :is="labelTag || 'label'"
    v-if="!deletable || modelValue"
    :class="['vsf-chip', `vsf-chip--size-${size}`]"
    data-testid="chip"
  >
    <input
      v-model="onSelected"
      class="peer vsf-chip__input"
      type="checkbox"
      :disabled="disabled"
      :value="value"
      data-testid="chip-input"
    />
    <div class="vsf-chip__peer-wrapper">
      <div v-if="$slots.prefix" class="vsf-chip__prefix">
        <slot name="prefix" />
      </div>
      <span v-if="label" class="vsf-chip__label">{{ label }}</span>
      <VsfIconClose v-if="deletable && !disabled" :size="getIconSize" class="vsf-chip__close-icon" />
    </div>
  </component>
</template>
