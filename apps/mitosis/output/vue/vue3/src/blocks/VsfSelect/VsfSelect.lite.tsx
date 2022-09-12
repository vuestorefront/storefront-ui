<template>
  <div class="relative">
    <div
      class="after:absolute box-border flex flex-col font-body after:pointer-events-none after:content-['<>'] after:top-10 after:right-[14px] after:rotate-90 after:font-base after:text-xl after:text-gray-500 after:z-0"
    >
      <select
        v-model="vueProxyValue"
        class="disabled:cursor-not-allowed remove-default-styling order-2 peer py-3 pl-[16px] pr-3.5 m-px required:m-0 invalid:m-0 active:m-0 text-gray-900 bg-transparent border border-gray-300 rounded-md hover:border-primary-400 active:border-2 active:border-primary-500 disabled:bg-gray-100 disabled:opacity-50 disabled:text-gray-900/40 disabled:border-gray-200 invalid:border-negative-600 invalid:border-2 outline-violet"
        :id="`select-${name}`"
        :value="useValue"
        :required="useRequired"
        :disabled="useDisabled"
        :selected="useValue"
        @change="onChangeHandler($event)"
      >
        <option value="" class="font-[Arial] bg-gray-300" :disabled="true">
          {{ usePlaceholderText }}
        </option>
        <template :key="index" v-for="(option, index) in useOptions">
          <option class="font-[Arial] bg-gray-300" :value="option.value">
            {{ option.label }}
          </option>
        </template>
      </select>
      <label
        class="peer-required:after:content-['*'] peer-required:after:text-sm order-1 mt-2 text-sm text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed font-medium"
        :htmlFor="`select-${name}`"
        >{{ useLabel }}</label
      >
      <span :class="_classStringToObject(errorTextClasses)">{{
        useErrorText
      }}</span>
      <span
        class="order-4 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed"
        >{{ useHelpText }}</span
      >
      <span
        class="order-5 hidden mt-1 text-xs text-gray-500 peer-required:block peer-disabled:cursor-not-allowed"
        >{{ useRequiredText }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
export type VsfSelectOption = {
  label?: string;
  value?: string;
};
export interface VsfSelectProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  options?: VsfSelectOption[];
  placeholderText?: string;
  requiredText?: string;
  helpText?: string;
  errorText?: string;
  modelValue?: any;
  onChange?: (...args: any[]) => void;
}

import { classStringFromArray } from "../../functions/domUtils";
const DEFAULT_VALUES = {
  label: "",
  value: "",
  options: [],
  required: false,
  disabled: false,
  invalid: false,
  placeholderText: "--Please choose an option--",
  requiredText: "*Required",
  helpText: "Help text",
  errorText: "Error text",
};

export default {
  name: "vsf-select",

  props: [
    "value",
    "options",
    "required",
    "disabled",
    "label",
    "helpText",
    "requiredText",
    "placeholderText",
    "errorText",
    "invalid",
    "onChange",
    "modelValue",
    "name",
  ],

  computed: {
    useValue() {
      return this.value || DEFAULT_VALUES.value;
    },
    useOptions() {
      return this.options || DEFAULT_VALUES.options;
    },
    useRequired() {
      return this.required || DEFAULT_VALUES.required;
    },
    useDisabled() {
      return this.disabled || DEFAULT_VALUES.disabled;
    },
    useLabel() {
      return this.label || DEFAULT_VALUES.label;
    },
    useHelpText() {
      return this.helpText || DEFAULT_VALUES.helpText;
    },
    useRequiredText() {
      return this.requiredText || DEFAULT_VALUES.requiredText;
    },
    usePlaceholderText() {
      return this.placeholderText || DEFAULT_VALUES.placeholderText;
    },
    useErrorText() {
      return this.errorText || DEFAULT_VALUES.errorText;
    },
    errorTextClasses() {
      return classStringFromArray([
        "order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed",
        this.invalid ? "block" : "hidden",
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
