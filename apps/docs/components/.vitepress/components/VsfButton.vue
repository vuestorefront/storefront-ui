<template>
  <template v-if="link">
    <a role="button" :href="link" :class="_classStringToObject(buttonClasses)">
      <template v-if="$slots.prefix">
        <span class="pr-2"><slot name="prefix" /></span>
      </template>

      <slot />

      <template v-if="$slots.suffix">
        <span class="pl-2"><slot name="suffix" /></span>
      </template>
    </a>
  </template>

  <template v-else>
    <button
        :disabled="useDisabledProp"
        :class="_classStringToObject(buttonClasses)"
    >
      <template v-if="$slots.prefix">
        <span class="pr-2"><slot name="prefix" /></span>
      </template>

      <slot />

      <template v-if="$slots.suffix">
        <span class="pl-2"><slot name="suffix" /></span>
      </template>
    </button>
  </template>
</template>

<script lang="ts">
type VsfButtonSizesKeys = keyof typeof VsfButtonSizes;
type VsfButtonVariantsKeys = keyof typeof VsfButtonVariants;
export interface VsfButtonProps {
  children?: SlotType;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  link?: string;
  size?: VsfButtonSizesKeys;
  variant?: VsfButtonVariantsKeys;
  disabled?: boolean;
}

import { classStringFromArray } from "@sfui/mitosis/src/functions/domUtils";
import { SlotType } from "@sfui/mitosis/src/functions/types";
import { validator } from "@sfui/mitosis/src/functions/propUtils";
export const VsfButtonSizes = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});
export const VsfButtonVariants = Object.freeze({
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  "destroy-primary": "destroy-primary",
  "destroy-secondary": "destroy-secondary",
  "destroy-tertiary": "destroy-tertiary",
});
const DEFAULT_VALUES: Required<VsfButtonProps> = {
  children: "Button",
  slotPrefix: "",
  slotSuffix: "",
  link: "",
  variant: VsfButtonVariants.primary,
  size: VsfButtonSizes.base,
  disabled: false,
};

export default {
  name: "vsf-button",

  props: ["disabled", "size", "variant", "slotPrefix", "slotSuffix", "link"],

  computed: {
    defaults() {
      return DEFAULT_VALUES;
    },
    useDisabledProp() {
      return this.disabled || this.defaults.disabled;
    },
    useSizeProp() {
      return validator(
          Object.keys(VsfButtonSizes),
          this.size,
          this.defaults.size
      );
    },
    useVariantProp() {
      return validator(
          Object.keys(VsfButtonVariants),
          this.variant,
          this.defaults.variant
      );
    },
    buttonClasses() {
      return classStringFromArray([
        "inline-flex items-center justify-center border rounded-md cursor-pointer font-body disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50",
        this.useSizeProp === VsfButtonSizes.sm
            ? "leading-5 px-3 py-[6px] text-sm"
            : this.useSizeProp === VsfButtonSizes.base
                ? "px-4 py-2"
                : "px-6 py-3",
        this.useVariantProp === VsfButtonVariants.tertiary ||
        this.useVariantProp === VsfButtonVariants["destroy-tertiary"]
            ? "font-normal bg-transparent disabled:bg-transparent"
            : "font-medium uppercase shadow-base disabled:bg-gray-200 disabled:shadow-none",
        this.useVariantProp === VsfButtonVariants.primary &&
        "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700",
        this.useVariantProp === VsfButtonVariants.secondary &&
        "bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700 ",
        this.useVariantProp === VsfButtonVariants.tertiary &&
        "bg-transparent text-primary-500 hover:bg-green-100 hover:text-primary-600 active:text-primary-700 active:bg-green-200",
        this.useVariantProp === VsfButtonVariants["destroy-primary"] &&
        "text-base text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 hover:shadow-medium",
        this.useVariantProp === VsfButtonVariants["destroy-secondary"] &&
        "text-base text-rose-600 bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 hover:text-rose-600 active:text-rose-700 hover:shadow-medium",
        this.useVariantProp === VsfButtonVariants["destroy-tertiary"] &&
        "text-base text-rose-600 hover:bg-rose-100 hover:text-rose-700 active:bg-rose-200 active:text-rose-800",
      ]);
    },
  },

  methods: {
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
