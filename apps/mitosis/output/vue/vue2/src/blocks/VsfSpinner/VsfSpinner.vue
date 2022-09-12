<template>
  <div
    role="progressbar"
    v-if="useTypeProp === VsfSpinnerTypes.base"
    :class="_classStringToObject(`relative ${sizeClasses}`)"
  >
    <div class="sr-only" role="alert">loading</div>
    <div
      aria-hidden="true"
      :class="
        _classStringToObject(
          `absolute bg-transparent border-gray-200 rounded-full ${sizeClassesWithBorder}`
        )
      "
    ></div>
    <div
      aria-hidden="true"
      :class="
        _classStringToObject(
          `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600 ${sizeClassesWithBorder}`
        )
      "
    ></div>
    <div
      aria-hidden="true"
      :class="
        _classStringToObject(
          `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder}`
        )
      "
    ></div>
    <div
      aria-hidden="true"
      :class="
        _classStringToObject(
          `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder}`
        )
      "
    ></div>
    <div
      aria-hidden="true"
      :class="
        _classStringToObject(
          `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder}`
        )
      "
    ></div>
  </div>
  <div class="relative h-1 overflow-hidden" v-else>
    <div class="sr-only" role="alert">loading...</div>
    <div class="absolute w-full h-1 bg-gray-200" aria-hidden="true"></div>
    <div
      class="absolute w-2.5 h-1 animate-linear-loader bg-primary-600"
      aria-hidden="true"
    ></div>
  </div>
</template>

<script>
export const VsfSpinnerTypes = Object.freeze({
  base: "base",
  linear: "linear",
});
export const VsfSpinnerVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
});
const DEFAULT_VALUES = {
  type: VsfSpinnerTypes.base,
  variant: VsfSpinnerVariants.base,
};

export default {
  name: "vsf-spinner",

  props: ["type", "variant"],

  data: () => ({ VsfSpinnerTypes }),

  computed: {
    useTypeProp() {
      return this.type ?? DEFAULT_VALUES.type;
    },
    useSizeProp() {
      return this.variant ?? DEFAULT_VALUES.variant;
    },
    sizeClasses() {
      switch (this.useSizeProp) {
        case VsfSpinnerVariants.sm:
          return "w-4 h-4";

        case VsfSpinnerVariants.lg:
          return "w-10 h-10";

        case VsfSpinnerVariants.xl:
          return "w-14 h-14";

        case VsfSpinnerVariants["2xl"]:
          return "w-24 h-24";

        case VsfSpinnerVariants["3xl"]:
          return "w-48 h-48";

        default:
          return "w-6 h-6";
      }
    },
    sizeClassesWithBorder() {
      switch (this.useSizeProp) {
        case VsfSpinnerVariants.sm:
          return `${this.sizeClasses} border-2`;

        case VsfSpinnerVariants.lg:
          return `${this.sizeClasses} border-2`;

        case VsfSpinnerVariants.xl:
          return `${this.sizeClasses} border-[3px]`;

        case VsfSpinnerVariants["2xl"]:
          return `${this.sizeClasses} border-4`;

        case VsfSpinnerVariants["3xl"]:
          return `${this.sizeClasses} border-8`;

        default:
          return `${this.sizeClasses} border-2`;
      }
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
