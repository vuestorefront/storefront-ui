<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { ref, type PropType } from 'vue';
import { SfSelectSize, SfIconExpandMore, useFocusVisible } from '@storefront-ui/vue';

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
  value: {
    type: String,
    default: '',
  },
  wrapperClassName: {
    type: String,
    default: '',
  },
});

const selected = ref(props.value);
const chevronRotated = ref(false);
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();
const { isFocusVisible } = useFocusVisible();

const clickHandler = () => (chevronRotated.value = true);

const blurHandler = () => (chevronRotated.value = false);

const keydownHandler = () => (chevronRotated.value = true);

const changedValue = (event: Event) => {
  selected.value = (event.target as HTMLSelectElement).value;
  chevronRotated.value = false;
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<template>
  <div
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
      :value="value || selected"
      :required="required"
      :disabled="disabled"
      :class="[
        'appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 ring-inset focus:ring-primary-700 focus:ring-2 outline-none bg-transparent rounded-md ring-1 ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200',
        {
          'py-1.5': size === SfSelectSize.sm,
          'py-2': size === SfSelectSize.base,
          'py-3 text-base': size === SfSelectSize.lg,
          '!ring-negative-600 ring-2': invalid && !disabled,
        },
      ]"
      data-testid="select-input"
      @blur="blurHandler"
      @click="clickHandler"
      @change="changedValue"
      @keydown.space="keydownHandler"
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
          chevronRotated ? 'rotate-180' : '',
        ]"
      />
    </slot>
  </div>
</template>
