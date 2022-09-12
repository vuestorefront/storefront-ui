<template>
  <a
    role="button"
    v-if="link"
    :href="link"
    :class="_classStringToObject(buttonClasses)"
  >
    <span class="pr-2" v-if="$slots.prefix"><slot name="prefix" /></span>

    <slot />

    <span class="pl-2" v-if="$slots.suffix"><slot name="suffix" /></span>
  </a>
  <button
    v-else
    :type="type"
    :class="_classStringToObject(buttonClasses)"
    :disabled="disabled"
    @click="onClick && onClick($event)"
  >
    <span class="pr-2" v-if="$slots.prefix"><slot name="prefix" /></span>

    <slot />

    <span class="pl-2" v-if="$slots.suffix"><slot name="suffix" /></span>
  </button>
</template>

<script>
import { classStringFromArray } from "../../functions/domUtils";
import { SlotType } from "../../functions/types";
import { validator } from "../../functions/propUtils";
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
  isRoundedFull: false,
  disabled: false,
  classes: "",
  onClick: () => {},
  type: "button",
  tile: false,
  icon: false,
  className: "",
};

export default {
  name: "vsf-button",

  props: [
    "size",
    "variant",
    "icon",
    "tile",
    "isRoundedFull",
    "classes",
    "className",
    "type",
    "disabled",
    "onClick",
    "slotPrefix",
    "slotSuffix",
    "link",
  ],

  computed: {
    useSizeProp() {
      return validator(
        Object.keys(VsfButtonSizes),
        this.size,
        DEFAULT_VALUES.size
      );
    },
    useVariantProp() {
      return validator(
        Object.keys(VsfButtonVariants),
        this.variant,
        DEFAULT_VALUES.variant
      );
    },
    buttonClasses() {
      return classStringFromArray([
        "inline-flex items-center justify-center cursor-pointer font-body disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50",
        this.useSizeProp === VsfButtonSizes.sm
          ? "leading-5 p-1.5 text-sm"
          : this.useSizeProp === VsfButtonSizes.base
          ? "p-2"
          : "p-3",
        !this.icon &&
          (this.useSizeProp === VsfButtonSizes.sm
            ? "px-2"
            : this.useSizeProp === VsfButtonSizes.base
            ? "px-4"
            : "px-6"),
        !this.tile && (this.isRoundedFull ? "rounded-full" : "rounded-md"),
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
        this.classes || "",
        this.className || "",
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
