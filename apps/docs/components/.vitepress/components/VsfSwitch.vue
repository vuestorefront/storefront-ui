<template>
  <div
    :class="
      _classStringToObject(
        `relative grid max-w-xs grid-cols-[36px_1fr] gap-x-2.5 right-checkbox ${rightCheckboxClasses}`,
      )
    "
  >
    <input
      v-model="vueProxyValue"
      type="checkbox"
      role="switch"
      :checked="isChecked"
      :id="`checkbox-${name}`"
      :name="name"
      :required="required"
      :disabled="disabled"
      :invalid="invalid"
      :class="_classStringToObject(classStringFromArray([inputClasses, sizeClass]))"
      @input="onChangeHandler($event)"
      :value="useValueProp"
    />
    <label
      :htmlFor="`checkbox-${name}`"
      :class="
        _classStringToObject(
          classStringFromArray([
            `text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed`,
            rightCheckbox ? '!col-start-[start-col] row-start-[start-row] col-end-[end-col]' : '',
          ]),
        )
      "
    >
      {{ useLabelProp }}
    </label>
    <span
      :class="
        _classStringToObject(
          classStringFromArray([
            `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body peer-disabled:text-gray-500/50`,
            !invalid ? 'hidden' : '',
            rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '',
          ]),
        )
      "
    >
      {{ useErrorTextProp }}
    </span>
    <span
      :class="
        _classStringToObject(
          classStringFromArray([
            `col-start-2 mt-0.5 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body`,
            rightCheckbox ? '!col-start-[start-col]' : '',
          ]),
        )
      "
    >
      {{ useHelpTextProp }}
    </span>
    <span
      :class="
        _classStringToObject(
          classStringFromArray([
            `hidden col-start-1 mt-4 text-xs text-gray-500 peer-required:block peer-disabled:opacity-50 font-body`,
            rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '',
          ]),
        )
      "
    >
      *Required
    </span>
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from 'vue';

import { classStringFromArray } from '@sfui/mitosis/src/functions/domUtils';
export const VsfSwitchVariants = Object.freeze({
  sm: 'sm',
  base: 'base',
});
const DEFAULT_VALUES = {
  value: '',
  label: '',
  helpText: '',
  errorText: '',
  size: VsfSwitchVariants.base,
};

export type VsfSwitchVariantsKeys = keyof typeof VsfSwitchVariants;
export interface VsfSwtichProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  errorText?: string;
  rightCheckbox?: boolean;
  checked?: boolean;
  size?: VsfSwitchVariantsKeys;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
}

export default {
  name: 'vsf-swtich',

  props: [
    'value',
    'label',
    'helpText',
    'errorText',
    'size',
    'rightCheckbox',
    'invalid',
    'onChange',
    'modelValue',
    'name',
    'required',
    'disabled',
  ],

  data: () => ({ classStringFromArray }),

  computed: {
    useValueProp() {
      return this.value || DEFAULT_VALUES.value;
    },
    useLabelProp() {
      return this.label || DEFAULT_VALUES.label;
    },
    useHelpTextProp() {
      return this.helpText || DEFAULT_VALUES.helpText;
    },
    useErrorTextProp() {
      return this.errorText || DEFAULT_VALUES.errorText;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    rightCheckboxClasses() {
      return this.rightCheckbox
        ? 'grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_36px_!important]'
        : '';
    },
    inputClasses() {
      return classStringFromArray([
        `after:content['']`,
        'peer flex self-center disabled:cursor-not-allowed outline-violet rounded-full appearance-none cursor-pointer relative',
        'border-gray-500 bg-white', // base styles
        'after:bg-gray-500 after:absolute after:top-1/2 after:left-1/4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:transition-transform', //after styles
        'active:checked:!bg-primary-700 active:checked:border-transparent', // active styles
        'checked:border-primary-500 checked:bg-primary-500 checked:after:!bg-white checked:after:translate-x-3/4', // checked
        'hover:checked:after:bg-white hover:checked:border-primary-600 hover:checked:!bg-primary-600', // checked:hover
        'disabled:!border-gray-500/50 disabled:checked:!border-transparent disabled:checked:!bg-gray-500/50 disabled:checked:after:!bg-white disabled:after:!bg-gray-500/50', // disabled
        this.invalid
          ? 'border-negative-600 after:bg-negative-600 active:border-negative-700 active:after:bg-negative-700'
          : 'hover:border-primary-600 hover:after:bg-primary-600 active:after:bg-primary-700 active:border-primary-700',
        this.rightCheckbox ? 'col-start-[end-col] row-start-[start-row] ' : '',
      ]);
    },
    sizeClass() {
      return this.useSizeProp === VsfSwitchVariants.base
        ? 'w-[36px] h-[20px] border-2 after:w-[13px] after:h-[13px]'
        : 'w-[30px] h-[17px] border-[1.5px] after:w-[11px] after:h-[11px]';
    },
    vueProxyValue: {
      get: function () {
        return this.modelValue;
      },
      set: function (value) {
        this.$emit('update:modelValue', value);
      },
    },
    isChecked() {},
  },

  methods: {
    onChangeHandler(event) {
      this.onChange && this.onChange(event);
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== 'string') {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
