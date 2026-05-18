<script setup lang="ts">
import { ref, useTemplateRef, watch, type InputHTMLAttributes } from 'vue';
import {
  ClassProp,
  SfIconCheckBox,
  SfIconCheckBoxOutlineBlank,
  SfIconIndeterminateCheckBox,
  twMerge,
  useTwMergeRoot,
} from '@storefront-ui/vue';

const { indeterminate = false } = defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  wrapperTag: {
    type: String,
    default: 'label',
  },
  wrapperClass: ClassProp,
  dataTestid: {
    type: String,
    default: 'checkbox',
  },
});

defineOptions({
  inheritAttrs: false,
});

const { attrsWithoutClass } = useTwMergeRoot();
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
    :class="
      twMerge(
        'flex cursor-pointer focus-visible-within:outline focus-visible-within:outline-offset-2 rounded-md',
        {
          'text-neutral-500 hover:text-primary-800 active:text-primary-900': !invalid && !$attrs.disabled,
          'text-negative-700 hover:text-negative-800 active:text-negative-900': invalid && !$attrs.disabled,
          'text-disabled-500 hover:text-disabled-600 active:text-disabled-700': $attrs.disabled,
        },
        wrapperClass,
      )
    "
    :data-testid="dataTestid ?? 'checkbox'"
  >
    <input
      ref="checkboxRef"
      :class="twMerge('sr-only', $attrs.class)"
      type="checkbox"
      :indeterminate="indeterminate"
      :invalid="invalid"
      v-bind="attrsWithoutClass"
      v-model="model"
    />
    <SfIconIndeterminateCheckBox v-if="isIndeterminate" />
    <template v-else>
      <SfIconCheckBox v-if="isChecked" />
      <SfIconCheckBoxOutlineBlank v-else />
    </template>
  </component>
</template>
