<script lang="ts">
export default {
  inheritAttrs: false,
};
const getSizeClasses = {
  [SfInputSize.sm]: ' h-[32px]',
  [SfInputSize.base]: 'h-[40px]',
  [SfInputSize.lg]: 'h-[48px]',
};
</script>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, inject, ref, toRefs } from 'vue';
import { SfInputSize, useFocusVisible } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  wrapperTag: {
    type: String,
    default: 'span',
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
const { modelValue, invalid: propInvalid } = toRefs(props);
const { isFocusVisible } = useFocusVisible({ isTextInput: true });
const fieldDisabled = inject<boolean>('disabled', false);
const fieldInvalid = inject<boolean>('invalid');
// This kind of condition doesn't work when fieldInvalid is `true` and you want to override it with propInvalid `false`.
// We may consider setting default value as `undefined`. It easily casts to `false`, so the default behaviour would stay the same.
// At the same time we could check `typeof propInvalid === 'undefined'` to detect if prop is set and always prefer it over the injected value.
const invalid = propInvalid.value || fieldInvalid;

// We must somehow set an ID as well.
// const fieldId = inject<string>('fieldId');
// const id = $attrs.id || fieldId; // <- it does not work

/*
Internal state has been implemented due to useFocusVisible and how it works. Main reason is that
it captures native HTMLElement.prototype.focus method. It makes value disappear under certain circumstances,
so it's important to keep it here, or to always pass modelValue to the component.
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
  <component
    :is="wrapperTag"
    :class="[
      'flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
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
    <slot name="prefix" />
    <input
      v-model="inputValue"
      v-bind="$attrs"
      :disabled="$attrs.disabled || fieldDisabled"
      class="min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent"
      :size="1"
      data-testid="input-field"
    />
    <slot name="suffix" />
  </component>
</template>
