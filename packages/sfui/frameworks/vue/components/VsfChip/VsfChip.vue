<script lang="ts">
const sizeClasses = {
  [VsfChipSize.sm]: 'text-sm py-1.5 gap-1.5',
  [VsfChipSize.base]: 'text-base py-2 gap-2',
};
</script>
<script lang="ts" setup>
import { type PropType, type InputHTMLAttributes } from 'vue';
import { toRefs, computed } from 'vue';
import { useId, VsfChipSize, useSlotsRef } from '@storefront-ui/vue';

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
const slots = useSlotsRef();
const inputId = useId();

const onSelected = computed({
  get: () => modelValue?.value,
  set: (value) => emit('update:modelValue', value),
});

const paddingForSize = computed(() => {
  switch (size.value) {
    case VsfChipSize.sm:
      return square.value ? 'px-1.5' : [slots.value.prefix ? 'pl-1.5' : 'pl-3', slots.value.suffix ? 'pr-1.5' : 'pr-3'];
    default:
      return square.value ? 'px-2' : [slots.value.prefix ? 'pl-2' : 'pl-4', slots.value.suffix ? 'pr-2' : 'pr-4'];
  }
});
</script>

<template>
  <input
    v-bind="inputProps"
    :id="inputId"
    v-model="onSelected"
    class="absolute w-0 outline-none appearance-none peer"
    type="checkbox"
  />
  <label
    v-bind="$attrs"
    :for="inputId"
    :class="[
      'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline',
      sizeClasses[size],
      paddingForSize,
    ]"
    data-testid="chip"
  >
    <slot v-if="$slots.prefix" name="prefix" />
    <slot />
    <slot v-if="$slots.suffix" name="suffix" />
  </label>
</template>
