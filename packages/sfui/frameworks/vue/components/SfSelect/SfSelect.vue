<script lang="ts" setup>
import { type PropType, ref, toRefs, computed } from 'vue';
import {
  SfSelectSize,
  SfIconExpandMore,
  useFocusVisible,
  useDisclosure,
  twMerge,
  useTwMergeRoot,
} from '@storefront-ui/vue';

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

defineOptions({
  inheritAttrs: false,
});
const { attrsWithoutClass } = useTwMergeRoot();

const { modelValue } = toRefs(props);
const { isOpen, close, open } = useDisclosure();
const { isFocusVisible } = useFocusVisible();

/*
Internal state has been implemented due to native select's element
value disappearing under certain circumstances. It's important to
keep it here, or to always pass modelValue to the component.
*/
const internalState = ref<string>(modelValue.value);
const selectModel = computed({
  get: () => modelValue.value || internalState.value,
  set: (value) => {
    emit('update:modelValue', value);
    internalState.value = value;
  },
});
</script>

<template>
  <span
    :class="
      twMerge(
        'relative flex flex-col rounded-xl',
        {
          'focus-within:outline focus-within:outline-offset': isFocusVisible,
        },
        wrapperClassName,
      )
    "
    data-testid="select"
  >
    <select
      :required="required"
      :disabled="disabled"
      :class="
        twMerge(
          'appearance-none disabled:cursor-not-allowed cursor-pointer px-3 text-neutral-900 focus:ring-primary-700 focus:ring-2 outline-hidden bg-transparent rounded-xl ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200',
          {
            'py-1.5': size === SfSelectSize.sm,
            'py-2': size === SfSelectSize.base,
            'py-3 text-base': size === SfSelectSize.lg,
            '!ring-negative-700 ring-2': invalid && !disabled,
          },
          $attrs.class,
        )
      "
      data-testid="select-input"
      @blur="close"
      @change="close"
      @click="open"
      @keydown.space="open"
      v-model="selectModel"
      v-bind="attrsWithoutClass"
    >
      <option
        v-if="placeholder"
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
