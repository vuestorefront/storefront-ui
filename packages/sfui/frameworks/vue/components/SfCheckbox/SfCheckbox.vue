<script setup lang="ts">
import type { InputHTMLAttributes, PropType } from 'vue';
import { computed, toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', param: InputHTMLAttributes['checked']): void;
}>();

const { modelValue } = toRefs(props);

const proxyChecked = computed({
  get: () => modelValue?.value,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <input
    v-model="proxyChecked"
    class="h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 checked:text-primary-700 checked:bg-checked-checkbox-current border-current indeterminate:bg-indeterminate-checkbox-current indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed enabled:hover:border-primary-800 enabled:active:border-primary-900 enabled:hover:checked:text-primary-800 enabled:hover:indeterminate:text-primary-800 enabled:active:checked:text-primary-900 enabled:checked:text-primary-700 enabled:checked:bg-checked-checkbox-current border-current enabled:indeterminate:bg-indeterminate-checkbox-current enabled:indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed enabled:focus-visible:outline enabled:focus-visible:outline-offset"
    :class="{
      'border-negative-700 enabled:hover:border-negative-800 enabled:active:border-negative-900': invalid,
    }"
    type="checkbox"
    data-testid="checkbox"
  />
</template>
