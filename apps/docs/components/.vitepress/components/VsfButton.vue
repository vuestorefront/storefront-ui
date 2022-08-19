<template>
  <template v-if="link">
    <a
      role="button"
      :href="link"
      :class="_classStringToObject(this.buttonClasses)"
    >
      <slot></slot>
    </a>
  </template>

  <template v-else>
    <button
      :disabled="disabled"
      :class="_classStringToObject(this.buttonClasses)"
    >
      <slot></slot>
    </button>
  </template>
</template>
<script>
import { defineAsyncComponent } from "vue";

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
const DEFAULT_VALUES = {
  children: "Button",
  variant: VsfButtonVariants.primary,
  size: VsfButtonSizes.base,
  disabled: false,
};

export default {
  name: "vsf-button",

  props: ["disabled", "size", "variant", "link"],

  computed: {
    useDisabled() {
      return this.disabled || DEFAULT_VALUES.disabled;
    },
    buttonSize() {
      switch (this.size) {
        case VsfButtonSizes.sm:
          return "leading-5 px-3 py-[6px] text-sm";

        case VsfButtonSizes.lg:
          return "px-6 py-3";

        default:
          return "px-4 py-2";
      }
    },
    buttonVariants() {
      switch (this.variant) {
        case VsfButtonVariants.secondary:
          return "font-medium uppercase bg-white border border-gray-200 hover:border-primary-300 active:border-primary-400 disabled:border-0 hover:bg-green-100 active:bg-green-200 disabled:bg-gray-200 text-primary-500 hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none";

        case VsfButtonVariants.tertiary:
          return "font-normal bg-transparent text-primary-500 hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-primary-600 active:text-primary-700 disabled:text-gray-500 disabled:opacity-50";

        case VsfButtonVariants["destroy-primary"]:
          return "text-base font-medium text-white uppercase bg-rose-600 hover:bg-rose-700 active:bg-rose-800 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none";

        case VsfButtonVariants["destroy-secondary"]:
          return "text-base font-medium uppercase bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 disabled:bg-gray-200 text-rose-600 hover:text-rose-600 active:text-rose-700 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none";

        case VsfButtonVariants["destroy-tertiary"]:
          return "text-base font-medium bg-transparent hover:bg-rose-100 active:bg-rose-200 disabled:bg-transparent text-rose-600 hover:text-rose-700 active:text-rose-800 disabled:text-gray-500 disabled:opacity-50";

        default:
          return "font-medium text-white uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 disabled:bg-gray-200 disabled:text-gray-500 disabled:opacity-50 shadow-base hover:shadow-medium disabled:shadow-none;";
      }
    },
    buttonClasses() {
      return `inline-flex items-center justify-center border rounded-md cursor-pointer font-body disabled:cursor-not-allowed outline-violet ${this.buttonVariants} ${this.buttonSize}`;
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
