<template>
  <div
    :class="
      _classStringToObject(
        `inline-flex relative items-center font-body ${fontSizeClass} ${pillClass} ${pillSpacingClass} ${fontWeightClass} ${
          className || ''
        }`
      )
    "
  >
    <slot />
  </div>
</template>

<script>
export const VsfCounterVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
});

export default {
  name: "vsf-counter",

  props: ["size", "pill", "className"],

  computed: {
    fontSizeClass() {
      switch (this.size) {
        case VsfCounterVariants.xs:
          return "text-3xs";

        case VsfCounterVariants.sm:
          return "text-2xs";

        case VsfCounterVariants.lg:
          return "text-sm";

        case VsfCounterVariants.xl:
          return "text-base";

        case VsfCounterVariants["2xl"]:
          return "text-lg";

        default:
          return "text-xs";
      }
    },
    pillSpacingClass() {
      if (!this.pill) return "";

      switch (this.size) {
        case VsfCounterVariants.xs:
        case VsfCounterVariants.sm:
          return "px-1";

        case VsfCounterVariants.lg:
          return "px-2.5";

        case VsfCounterVariants.xl:
        case VsfCounterVariants["2xl"]:
          return "px-3";

        default:
          return "px-2";
      }
    },
    fontWeightClass() {
      if (this.pill) return "font-medium";

      switch (this.size) {
        case VsfCounterVariants.xs:
        case VsfCounterVariants.sm:
          return "font-medium";

        default:
          return "font-normal";
      }
    },
    pillClass() {
      return this.pill
        ? "py-0.5 ring-1 ring-gray-200 ring-inset rounded-full text-gray-900"
        : `before:content-['('] after:content-[')'] text-gray-500`;
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
