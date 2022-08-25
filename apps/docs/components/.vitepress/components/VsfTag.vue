<template>
  <template v-if="!useBadgeProp">
    <div
      :class="
        _classStringToObject(
          `${tagVariants} ${tagSizes} inline-flex font-normal rounded-md font-body items-center`
        )
      "
    >
      <div :class="_classStringToObject(slotBefore ? 'mr-1' : '')">
        <slot name="before" />
      </div>
      <slot />
      <div :class="_classStringToObject(slotAfter ? 'ml-1' : '')">
        <slot name="after" />
      </div>
    </div>
  </template>

  <template v-else>
    <div>
      <div
        :class="
          _classStringToObject(
            `${
              useSizeProp === 'sm' ? 'h-6 text-xs' : 'h-8 text-sm'
            } flex direction-row`
          )
        "
      >
        <div
          :class="
            _classStringToObject(
              ` ${badgeColors} flex items-center font-medium text-white fill-white font-body direction-row`
            )
          "
        >
          <template v-if="slotBefore">
            <span
              :class="
                _classStringToObject(
                  `${
                    useSizeProp === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
                  } flex direction-row ml-2`
                )
              "
            >
              <slot name="before" />
            </span>
          </template>

          <span class="mr-2 ml-1.5"> <slot /> </span>
        </div>
        <div
          :class="
            _classStringToObject(
              `border-t-0 border-b-transparent border-t-transparent bg-transparent ${badgeBorderColors} ${badgeSizes}`
            )
          "
        ></div>
      </div>
    </div>
  </template>
</template>
<script>
import { defineAsyncComponent } from "vue";

export const VsfTagVariants = Object.freeze({
  base: "base",
  info: "info",
  positive: "positive",
  warning: "warning",
  error: "error",
  disabled: "disabled",
});
export const VsfTagSizes = Object.freeze({
  sm: "sm",
  base: "base",
});
const DEFAULT_VALUES = {
  variant: VsfTagVariants.base,
  size: VsfTagSizes.base,
  badge: false,
};

export default {
  name: "vsf-tag",

  props: ["size", "variant", "badge", "slotBefore", "slotAfter"],

  computed: {
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    useVariantProp() {
      return this.variant || DEFAULT_VALUES.variant;
    },
    useBadgeProp() {
      return this.badge || DEFAULT_VALUES.badge;
    },
    tagVariants() {
      switch (this.useVariantProp) {
        case VsfTagVariants.base:
          return "bg-gray-100 text-gray-600";

        case VsfTagVariants.info:
          return "bg-secondary-100 text-secondary-800";

        case VsfTagVariants.positive:
          return "bg-primary-100 text-primary-600";

        case VsfTagVariants.warning:
          return "bg-warning-100 text-warning-700";

        case VsfTagVariants.error:
          return "bg-negative-100 text-negative-700";

        case VsfTagVariants.disabled:
          return "bg-gray-100 text-gray-500 opacity-50";

        default:
          return "bg-gray-100 text-gray-600";
      }
    },
    tagSizes() {
      switch (this.useSizeProp) {
        case VsfTagSizes.sm:
          return "px-2 py-1 text-xs";

        default:
          return "px-3 py-1 text-sm";
      }
    },
    badgeSizes() {
      return this.useSizeProp === "sm"
        ? "border-b-[24px] border-l-[12px]"
        : "border-b-[32px] border-l-[16px]";
    },
    badgeBorderColors() {
      switch (this.useVariantProp) {
        case VsfTagVariants.base:
          return "border-l-gray-600";

        case VsfTagVariants.info:
          return "border-l-secondary-800";

        case VsfTagVariants.positive:
          return "border-l-primary-600";

        case VsfTagVariants.warning:
          return "border-l-warning-600";

        case VsfTagVariants.error:
          return "border-l-negative-600";

        case VsfTagVariants.disabled:
          return "border-gray-500 opacity-50";

        default:
          return "border-l-gray-600";
      }
    },
    badgeColors() {
      switch (this.useVariantProp) {
        case VsfTagVariants.base:
          return "bg-gray-600";

        case VsfTagVariants.info:
          return "bg-secondary-800";

        case VsfTagVariants.positive:
          return "bg-primary-600";

        case VsfTagVariants.warning:
          return "bg-warning-600";

        case VsfTagVariants.error:
          return "bg-negative-600";

        case VsfTagVariants.disabled:
          return "bg-gray-500 opacity-50";

        default:
          return "bg-gray-600";
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
