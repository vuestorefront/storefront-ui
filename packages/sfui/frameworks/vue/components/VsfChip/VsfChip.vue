<script lang="ts" setup>
import { PropType, InputHTMLAttributes, toRefs, computed } from 'vue';
import { useId } from '../../shared/useId';
import { VsfChipSize } from './types';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfChipSize}`>,
    default: VsfChipSize.base,
  },
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    default: false,
  },
  inputProps: {
    type: Object as PropType<InputHTMLAttributes>,
    default: null,
  },
  square: {
    type: Boolean,
    default: false,
  },
});
const { size, square, modelValue } = toRefs(props);
const emit = defineEmits<{
  (event: 'update:modelValue', param: InputHTMLAttributes['checked']): void;
}>();

const inputId = useId();

const onSelected = computed({
  get: () => modelValue?.value,
  set: (value) => emit('update:modelValue', value),
});

const sizeClasses = computed(() => {
  switch (size.value) {
    case VsfChipSize.sm:
      return square.value ? 'text-sm p-1.5' : 'text-sm py-1.5 px-3';
    default:
      return square.value ? 'text-base p-2' : 'text-base h-10 py-2 px-4 min-w-[2.5rem]';
  }
});
</script>

<template>
  <!-- TODO: [last-check: 09-03-2023] reimplement when has() has support https://caniuse.com/css-has -->
  <input
    v-bind="inputProps"
    :id="inputId"
    v-model="onSelected"
    class="peer appearance-none outline-none absolute w-0"
    type="checkbox"
  />
  <label
    v-bind="$attrs"
    :for="inputId"
    :class="[
      'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline',
      sizeClasses,
    ]"
    data-testid="chip"
    ><slot />
  </label>
</template>
