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
import { computed, ref, toRefs } from 'vue';
import { SfInputSize, useFocusVisible } from '@storefront-ui/vue';

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
  (event: 'update:modelValue', value: string | number): void;
}>();
const { modelValue, invalid } = toRefs(props);
const { isFocusVisible } = useFocusVisible({ isTextInput: true });

/*
Internal state has been implemented due to useFocusVisible and how it works. Main reason is that
it captures native HTMLElement.prototype.focus method. It makes value disappear under certain circumstances,
so it's importatnt to keep it here, or to always pass modelValue to the component.
*/
const internalState = ref<string | number>();
const inputValue = computed({
  get: () => modelValue.value ?? internalState.value,
  set: (value) => {
    emit('update:modelValue', value);
    internalState.value = value;
  },
});
</script>

<template>
  <div
    :class="[
      'flex items-center bg-white rounded-md ring-inset text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
      {
        'ring-2 ring-negative-700': invalid,
        'ring-1 ring-neutral-200': !invalid,
        'focus-within:outline focus-within:outline-offset': isFocusVisible,
      },
      getSizeClasses[size],
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
      :size="1"
      data-testid="input-field"
    />
    <span v-if="$slots.suffix" class="pl-2">
      <slot name="suffix" />
    </span>
  </div>
</template>
