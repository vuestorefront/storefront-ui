<template>
  <div
    class="relative grid max-w-xs grid-cols-[24px_1fr] gap-x-2.5"
    :class="{ 'right-checkbox': rightCheckbox }"
  >
    <input
      id="checkbox-left"
      v-focus
      :indeterminate="indeterminate"
      type="checkbox"
      :name="name"
      :required="required"
      :disabled="disabled"
      :invalid="invalid"
      class="peer flex self-center w-[18px] h-[18px] border-2 border-gray-500 rounded-sm appearance-none cursor-pointer hover:border-primary-500 checked:bg-checked-checkbox checked:border-primary-500 disabled:border-gray-500/50 disabled:cursor-not-allowed outline-violet"
      :class="{'bg-indeterminate-checkbox border-primary-500': indeterminate, '!border-[#b8b8bc] bg-indeterminate-disabled-checkbox': indeterminate && disabled, 'border-negative-600': invalid, 'col-start-[end-col] row-start-[start-row]': rightCheckbox }"
    >
    <label
      for="checkbox-left"
      class="text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed"
      :class="{ '!col-start-[start-col] row-start-[start-row] col-end-[end-col]': rightCheckbox }"
    >{{ label }}</label>
    <span
      :class="{ 'hidden': !invalid, '!col-start-[start-col] col-end-[end-col]': rightCheckbox }"
      class="block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body"
    >{{ errorText }}</span>
    <span
      class="col-start-2 mt-0.5 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body"
      :class="{ '!col-start-[start-col]': rightCheckbox }"
    >{{ helpText }}</span>
    <span
      class="hidden col-start-1 mt-4 text-xs text-gray-500 peer-required:block peer-disabled:opacity-50 font-body"
      :class="{ '!col-start-[start-col] col-end-[end-col]': rightCheckbox }"
    >*Required</span>
  </div>
</template>
<script>
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'CheckboxBase',
  directives: {
    focus
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Boolean],
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    },
    rightCheckbox: {
      type: Boolean,
      default: false
    }
  }
};
</script>
