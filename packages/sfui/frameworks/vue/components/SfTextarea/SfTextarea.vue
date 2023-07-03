<script lang="ts">
const getSizeClasses = {
  [SfTextareaSize.sm]: ' h-[32px] py-[6px] pl-4 pr-3',
  [SfTextareaSize.base]: 'h-[64px] py-2 pl-4 pr-3',
  [SfTextareaSize.lg]: 'h-[72px], p-3 pl-4',
};
</script>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { SfTextareaSize, useFocusVisible } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as PropType<`${SfTextareaSize}`>,
    default: SfTextareaSize.base,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void;
}>();
const { modelValue } = toRefs(props);
const { isFocusVisible } = useFocusVisible({ isTextInput: true });

const textareaValue = computed({
  get: () => modelValue?.value,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <textarea
    v-model="textareaValue"
    :class="[
      'flex items-center px-4 bg-white rounded-md text-neutral-900 hover:ring-primary-800 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
      {
        'ring-2 ring-negative-700': invalid,
        'ring-1 ring-neutral-200': !invalid,
        'focus-within:outline focus-within:outline-offset': isFocusVisible,
      },
      getSizeClasses[size],
    ]"
    data-testid="textarea"
  />
</template>
