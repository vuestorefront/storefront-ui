<script lang="ts">
export default {
  inheritAttrs: false,
};
const getSizeClasses = {
  [SfInputSize.sm]: 'py-1.5 px-4',
  [SfInputSize.base]: 'py-2 px-4',
  [SfInputSize.lg]: 'py-3 px-4',
};
</script>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { toRefs } from 'vue';
import { useVModel } from '@vueuse/core';
import { SfInputSize } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as PropType<`${SfInputSize}`>,
    default: SfInputSize.base,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: [String, Object],
    default: '',
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'focus'): void;
}>();
const { invalid } = toRefs(props);

const inputValue = useVModel(props, 'modelValue', emit);
</script>

<template>
  <div
    :class="[
      'flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
      getSizeClasses[size],
      invalid ? 'ring-2 ring-negative-700' : 'ring-1 ring-neutral-200',
      wrapperClass,
    ]"
    data-testid="input"
  >
    <span v-if="$slots.prefix" class="pr-2">
      <slot name="prefix" />
    </span>
    <input
      v-model="inputValue"
      v-bind="$attrs"
      class="min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent"
      data-testid="input-field"
      :size="1"
    />
    <span v-if="$slots.suffix" class="pl-2">
      <slot name="suffix" />
    </span>
  </div>
</template>
