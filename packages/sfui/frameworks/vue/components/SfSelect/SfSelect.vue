<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { type PropType, computed } from 'vue';
import { SfSelectSize, SfIconExpandMore, useFocusVisible, useDisclosure } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${SfSelectSize}`>,
    default: SfSelectSize.base,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  wrapperClassName: {
    type: String,
    default: '',
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();

const { isOpen, close, open } = useDisclosure();
const { isFocusVisible } = useFocusVisible();

const modelProxy = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<template>
  <span
    :class="[
      'relative flex flex-col rounded-md',
      {
        'focus-within:outline focus-within:outline-offset': isFocusVisible,
      },
      wrapperClassName,
    ]"
    data-testid="select"
  >
    <select
      v-bind="$attrs"
      :required="required"
      v-model="modelProxy"
      :disabled="disabled"
      :class="[
        'appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 ring-inset focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200',
        {
          'py-1.5': size === SfSelectSize.sm,
          'py-2': size === SfSelectSize.base,
          'py-3 text-base': size === SfSelectSize.lg,
          '!ring-negative-700 ring-2': invalid && !disabled,
        },
      ]"
      data-testid="select-input"
      @blur="close"
      @change="close"
      @click="open"
      @keydown.space="open"
    >
      <option
        v-if="placeholder"
        disabled
        selected
        hidden
        class="text-sm bg-neutral-300"
        value=""
        :class="[
          'bg-neutral-300 text-sm',
          {
            'text-base': size === SfSelectSize.lg,
          },
        ]"
        data-testid="select-placeholder"
      >
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <slot name="chevron">
      <SfIconExpandMore
        :class="[
          'absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5',
          disabled ? 'text-disabled-500' : 'text-neutral-500',
          isOpen ? 'rotate-180' : '',
        ]"
      />
    </slot>
  </span>
</template>
