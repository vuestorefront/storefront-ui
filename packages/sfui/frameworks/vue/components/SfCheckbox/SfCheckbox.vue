<script setup lang="ts">
import { ref, useTemplateRef, watch, type InputHTMLAttributes } from 'vue';
import { ClassProp, SfIconCheckBox, SfIconCheckBoxOutlineBlank, SfIconIndeterminateCheckBox } from '@storefront-ui/vue';

const { indeterminate = false } = defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  labelClass: ClassProp,
  indeterminate: {
    type: Boolean,
    default: false,
  },
  wrapperTag: {
    type: String,
    default: 'label',
  },
});

defineOptions({
  inheritAttrs: false,
});
const model = defineModel<InputHTMLAttributes['checked']>({ default: false });
const checkboxRef = useTemplateRef<HTMLInputElement>('checkboxRef');

const isChecked = ref();
const isIndeterminate = ref();

watch(
  [model, () => indeterminate],
  async () => {
    isChecked.value = checkboxRef.value?.checked;
    isIndeterminate.value = checkboxRef.value?.indeterminate;
  },
  { immediate: true, flush: 'post' },
);
</script>

<template>
  <component
    :is="wrapperTag"
    :class="[
      'flex cursor-pointer focus-visible:outline-primary-700 focus-visible:outline focus-visible:outline-offset-2 rounded-md',
      {
        'text-neutral-500 hover:text-primary-800 active:text-primary-900': !invalid && !$attrs.disabled,
        'text-negative-700 hover:text-negative-800 active:text-negative-900': invalid && !$attrs.disabled,
        'text-disabled-500 hover:text-disabled-600 active:text-disabled-700': $attrs.disabled,
      },
      labelClass,
    ]"
    tabindex="0"
    data-testid="checkbox"
  >
    <input
      class="hidden"
      type="checkbox"
      ref="checkboxRef"
      :indeterminate="indeterminate"
      :invalid="invalid"
      v-bind="$attrs"
      v-model="model"
    />
    <SfIconIndeterminateCheckBox v-if="isIndeterminate" />
    <template v-else>
      <SfIconCheckBox v-if="isChecked" />
      <SfIconCheckBoxOutlineBlank v-else />
    </template>
  </component>
</template>
