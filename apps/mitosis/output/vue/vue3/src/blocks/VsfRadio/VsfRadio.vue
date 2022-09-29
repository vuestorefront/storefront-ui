<template>
  <div class="max-w-xs">
    <label :htmlFor="useIdProp" :class="_classStringToObject(labelClasses)">
      <input
        v-model="vueProxyValue"
        type="radio"
        :id="useIdProp"
        :name="useNameProp"
        :value="useValueProp"
        :disabled="useDisabledProp"
        :checked="isChecked()"
        @input="onChangeHandler($event)"
        :class="_classStringToObject(inputClasses)"
      />
      {{ useLabelProp }}
      <div :class="_classStringToObject(helpTextClasses)">
        <span
          :class="
            _classStringToObject(
              classStringFromArray([useAlignmentProp === 'left' && ''])
            )
          "
        >
          {{ useHelpTextProp }}
        </span>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
type VsfRadioVariantsKeys = keyof typeof VsfRadioVariants;
type VsfRadioSizeKeys = keyof typeof VsfRadioSize;
type VsfRadioAlignmentKeys = keyof typeof VsfRadioAlignment;
export interface VsfRadioProps {
  id: string;
  variant?: VsfRadioVariantsKeys;
  name?: string;
  value?: string | string[] | number;
  disabled?: boolean;
  selected?: string;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  modelValue?: any;
  size?: VsfRadioSizeKeys;
  alignment?: VsfRadioAlignmentKeys;
  onChange?: (...args: any[]) => void;
}

import { classStringFromArray } from "../../functions/domUtils";
export const VsfRadioVariants = Object.freeze({
  base: "base",
  tile: "tile",
});
export const VsfRadioSize = Object.freeze({
  lg: "lg",
  base: "base",
  sm: "sm",
});
export const VsfRadioAlignment = Object.freeze({
  left: "left",
  right: "right",
});
const DEFAULT_VALUES: Required<VsfRadioProps> = {
  id: "",
  variant: VsfRadioVariants.base,
  name: "",
  value: "",
  disabled: false,
  selected: "",
  invalid: false,
  label: "Label",
  helpText: "Help text",
  modelValue: "",
  size: VsfRadioSize.base,
  alignment: VsfRadioAlignment.left,
  onChange: () => {},
};

export default {
  name: "vsf-radio",

  props: [
    "id",
    "variant",
    "alignment",
    "size",
    "invalid",
    "disabled",
    "value",
    "selected",
    "name",
    "label",
    "helpText",
    "modelValue",
    "onChange",
  ],

  data: () => ({ classStringFromArray }),

  computed: {
    useIdProp() {
      return this.id;
    },
    useVariantProp() {
      return this.variant ?? DEFAULT_VALUES.variant;
    },
    useAlignmentProp() {
      return this.alignment ?? DEFAULT_VALUES.alignment;
    },
    useSizeProp() {
      return this.size ?? DEFAULT_VALUES.size;
    },
    useInvalidProp() {
      return this.invalid ?? DEFAULT_VALUES.invalid;
    },
    useDisabledProp() {
      return this.disabled ?? DEFAULT_VALUES.disabled;
    },
    useValueProp() {
      return this.value ?? DEFAULT_VALUES.value;
    },
    useSelectedProp() {
      return this.selected ?? DEFAULT_VALUES.selected;
    },
    useNameProp() {
      return this.name ?? DEFAULT_VALUES.name;
    },
    useLabelProp() {
      return this.label ?? DEFAULT_VALUES.label;
    },
    useHelpTextProp() {
      return this.helpText ?? DEFAULT_VALUES.helpText;
    },
    vueProxyValue: {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
    },
    inputClasses() {
      return classStringFromArray([
        "w-5 h-5 my-1 border-2 border-gray-500 rounded-full appearance-none cursor-pointer hover:border-primary-600 hover:checked:bg-primary-600 checked:bg-primary-700 checked:border-primary-700 checked:shadow-inset",
        this.useVariantProp !== VsfRadioVariants.base &&
          "disabled:border-gray-500/50",
        this.useInvalidProp &&
          "border-negative-600 hover:border-negative-600 checked:border-negative-700",
        this.useDisabledProp &&
          "!border-gray-500 opacity-50 cursor-not-allowed",
        this.useAlignmentProp === VsfRadioAlignment.left && "ml-1 mr-2",
        this.isChecked() &&
          this.useDisabledProp &&
          "!border-gray-500 !bg-gray-500 opacity-50",
      ]);
    },
    labelClasses() {
      return classStringFromArray([
        "flex flex-wrap items-center text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] disabled:text-gray-900/40 font-body",
        this.useAlignmentProp === VsfRadioAlignment.right &&
          "flex-row-reverse justify-between",
        this.useDisabledProp &&
          "!border-gray-500 opacity-50 cursor-not-allowed",
        this.useSizeProp === VsfRadioSize.lg && "py-4",
        this.useSizeProp === VsfRadioSize.base && "py-2",
        this.useSizeProp === VsfRadioSize.sm && "py-1",
        this.useVariantProp === VsfRadioVariants.tile &&
          "px-4 hover:bg-gray-100 rounded-md cursor-pointer",
      ]);
    },
    helpTextClasses() {
      return classStringFromArray([
        "w-full text-xs text-gray-500 peer-disabled:text-gray-500/50",
        this.useAlignmentProp === VsfRadioAlignment.left && "ml-8",
        this.useDisabledProp && "opacity-50",
      ]);
    },
  },

  methods: {
    isChecked() {
      return (this.useValueProp || this.modelValue) === this.useSelectedProp;
    },
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
