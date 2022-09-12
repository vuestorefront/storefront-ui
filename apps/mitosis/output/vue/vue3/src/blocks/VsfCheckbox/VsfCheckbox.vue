<template>
  <div
    :class="
      _classStringToObject(
        `sfui-checkbox relative grid max-w-xs grid-cols-[24px_1fr] gap-x-2.5 right-checkbox ${rightCheckboxClasses}`
      )
    "
  >
    <input
      v-model="vueProxyValue"
      type="checkbox"
      :checked="isChecked"
      :id="`checkbox-${name}`"
      :indeterminate="indeterminate"
      :name="name"
      :required="required"
      :disabled="disabled"
      :invalid="invalid"
      :class="_classStringToObject(inputClasses)"
      @input="onChangeHandler($event)"
      :value="useValueProp"
    />
    <label
      :htmlFor="`checkbox-${name}`"
      :class="
        _classStringToObject(
          classStringFromArray([
            `text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed`,
            rightCheckbox
              ? '!col-start-[start-col] row-start-[start-row] col-end-[end-col]'
              : '',
          ])
        )
      "
    >
      {{ useLabelProp }}
    </label>
    <span
      :class="
        _classStringToObject(
          classStringFromArray([
            `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body`,
            !invalid ? 'hidden' : '',
            rightCheckbox ? '!col-start-[start-col] col-end-[end-col]' : '',
          ])
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
          ])
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
          ])
        )
      "
    >
      *Required
    </span>
  </div>
</template>

<script lang="ts">
export interface VsfCheckboxProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  errorText?: string;
  rightCheckbox?: boolean;
  checked?: boolean;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
}

import { classStringFromArray } from "../../functions/domUtils";
const DEFAULT_VALUES = {
  value: "",
  label: "",
  helpText: "",
  errorText: "",
};

export default {
  name: "vsf-checkbox",

  props: [
    "value",
    "label",
    "helpText",
    "errorText",
    "rightCheckbox",
    "indeterminate",
    "invalid",
    "disabled",
    "onChange",
    "modelValue",
    "name",
    "required",
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
    rightCheckboxClasses() {
      return this.rightCheckbox
        ? "grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_24px_!important]"
        : "";
    },
    inputClasses() {
      return classStringFromArray([
        "peer flex self-center w-[18px] h-[18px] border-2 border-gray-500 rounded-sm appearance-none cursor-pointer",
        "hover:border-primary-500 checked:bg-checked-checkbox checked:border-primary-500 disabled:border-gray-500/50",
        "disabled:cursor-not-allowed outline-violet",
        this.indeterminate
          ? "bg-indeterminate-checkbox border-primary-500 "
          : "",
        this.invalid ? "!border-negative-600" : "",
        this.indeterminate && this.disabled
          ? "!border-[#b8b8bc] bg-indeterminate-disabled-checkbox "
          : "",
        this.rightCheckbox ? "col-start-[end-col] row-start-[start-row] " : "",
      ]);
    },
    vueProxyValue: {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
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
      if (typeof str !== "string") {
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
