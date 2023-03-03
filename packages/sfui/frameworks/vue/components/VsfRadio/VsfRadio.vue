<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const { modelValue } = toRefs(props);
const proxyChecked = computed({
  get: () => modelValue.value,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
<template>
  <input
    v-model="proxyChecked"
    :name="name"
    type="radio"
    :value="value"
    :class="[
      'min-w-[20px] h-5 border-2 border-neutral-500 rounded-full appearance-none cursor-pointer focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 active:border-primary-900 hover:border-primary-700 checked:bg-primary-700 checked:border-primary-700 checked:shadow-inset hover:checked:bg-primary-800 hover:checked:border-primary-800 active:checked:bg-primary-900 active:checked:border-primary-900 disabled:border-disabled-500 disabled:opacity-40 disabled:cursor-not-allowed disabled:checked:bg-disabled-500 disabled:checked:border-disabled-500',
      { '!border-negative-700 hover:!border-negative-800 active:!border-negative-900': invalid },
    ]"
    :disabled="disabled"
  />
</template>
