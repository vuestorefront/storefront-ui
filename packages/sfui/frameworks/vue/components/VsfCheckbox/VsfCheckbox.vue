<script setup lang="ts">
import type { InputHTMLAttributes, PropType } from 'vue';
import { computed, toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    required: true,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
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
    class="flex self-center h-[18px] min-w-[18px] border-2 rounded-sm appearance-none cursor-pointer text-gray-500 enabled:hover:border-primary-800 active:border-primary-900 hover:checked:text-primary-800 hover:indeterminate:text-primary-800 active:checked:text-primary-900 checked:text-primary-700 checked:bg-checked-checkbox-current border-current indeterminate:bg-indeterminate-checkbox-current indeterminate:text-primary-700 disabled:text-gray-300 hover:text-gray-300 disabled:cursor-not-allowed"
    :class="{
      'border-negative-700 hover:border-negative-800 active:border-negative-900': invalid,
    }"
    type="checkbox"
    data-testid="checkbox"
  />
</template>
