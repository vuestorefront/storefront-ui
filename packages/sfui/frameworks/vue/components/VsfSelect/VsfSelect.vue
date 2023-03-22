<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { ref, type PropType } from 'vue';
import { VsfSelectSize, VsfIconExpandMore } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfSelectSize}`>,
    default: VsfSelectSize.base,
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
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();

const changedValue = (event: Event) => {
  selected.value = (event.target as HTMLSelectElement).value;
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<template>
  <div :class="['relative flex flex-col', wrapperClassName]" data-testid="select">
    <select
      v-bind="$attrs"
      :required="required"
      :disabled="disabled"
      :class="[
        'appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 bg-transparent rounded-md ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200 peer',
        {
          'py-1.5': size === VsfSelectSize.sm,
          'py-2': size === VsfSelectSize.base,
          'py-3 text-base': size === VsfSelectSize.lg,
          '!ring-negative-600 ring-2': invalid && !disabled,
        },
      ]"
      data-testid="select-input"
      @change="changedValue"
    >
      <option
        v-if="placeholder"
        class="text-sm bg-neutral-300"
        value=""
        :class="[
          'bg-neutral-300 text-sm',
          {
            'text-base': size === VsfSelectSize.lg,
          },
        ]"
        data-testid="select-placeholder"
      >
        {{ placeholder }}
      </option>
      <slot />
    </select>
    <slot name="chevron">
      <VsfIconExpandMore
        :class="[
          'absolute -translate-y-1 pointer-events-none top-1/3 right-4 peer-focus:rotate-180 transition easy-in-out duration-0.5',
          disabled ? 'text-disabled-500' : 'text-neutral-500',
        ]"
      />
    </slot>
  </div>
</template>
