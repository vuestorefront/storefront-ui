<template>
  <template v-if="!useBadgeProp">
    <div :class="_classStringToObject(`${tagVariants} ${tagSizes}`)">
      <template v-if="$slots.prefix">
        <div
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfTagSizes.sm ? 'w-4 h-4' : 'w-5 h-5'
              } mr-1 flex`
            )
          "
        >
          <slot name="prefix" />
        </div>
      </template>

      <slot />

      <template v-if="$slots.suffix">
        <div
          :class="
            _classStringToObject(
              `${
                useSizeProp === VsfTagSizes.sm ? 'w-4 h-4' : 'w-5 h-5'
              } ml-1 flex`
            )
          "
        >
          <slot name="suffix" />
        </div>
      </template>
    </div>
  </template>

  <template v-else>
    <div class="inline-flex items-center">
      <div
        :class="
          _classStringToObject(
            `${
              useSizeProp === 'sm' ? 'h-6 text-xs' : 'h-8 text-sm'
            } flex direction-row`
          )
        "
      >
        <div :class="_classStringToObject(`${badgeColors}`)">
          <template v-if="$slots.prefix">
            <span
              :class="
                _classStringToObject(
                  `${
                    useSizeProp === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
                  } flex direction-row ml-2`
                )
              "
            >
              <slot name="prefix" />
            </span>
          </template>

          <span class="mx-2"> <slot /> </span>
        </div>
        <div
          :class="_classStringToObject(`${badgeBorderColors} ${badgeSizes}`)"
        ></div>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import type { SlotType } from "../../functions/types";
type VsfTagVariantsKeys = keyof typeof VsfTagVariants;
type VsfTagSizesKeys = keyof typeof VsfTagSizes;
export interface VsfTagProps {
  variant: VsfTagVariantsKeys;
  size: VsfTagSizesKeys;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  children: SlotType;
  badge: Boolean;
}

import { classStringFromArray } from "../../functions/domUtils";
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

  props: ["size", "variant", "badge", "slotPrefix", "slotSuffix"],

  data: () => ({ VsfTagSizes }),

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
      return classStringFromArray([
        "inline-flex font-normal rounded-md font-body items-center",
        this.useVariantProp === VsfTagVariants.base &&
          "bg-gray-100 text-gray-600",
        this.useVariantProp === VsfTagVariants.info &&
          "bg-secondary-100 text-secondary-800",
        this.useVariantProp === VsfTagVariants.positive &&
          "bg-primary-100 text-primary-600",
        this.useVariantProp === VsfTagVariants.warning &&
          "bg-warning-100 text-warning-700",
        this.useVariantProp === VsfTagVariants.error &&
          "bg-negative-100 text-negative-700",
        this.useVariantProp === VsfTagVariants.disabled &&
          "bg-gray-100 text-gray-500 opacity-50",
      ]);
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
      return classStringFromArray([
        "border-t-0 border-b-transparent border-t-transparent bg-transparent",
        this.useVariantProp === VsfTagVariants.base && "border-l-gray-600",
        this.useVariantProp === VsfTagVariants.info && "border-l-secondary-800",
        this.useVariantProp === VsfTagVariants.positive &&
          "border-l-primary-600",
        this.useVariantProp === VsfTagVariants.warning &&
          "border-l-warning-600",
        this.useVariantProp === VsfTagVariants.error && "border-l-negative-600",
        this.useVariantProp === VsfTagVariants.disabled &&
          "border-gray-500 opacity-50",
      ]);
    },
    badgeColors() {
      return classStringFromArray([
        "inline-flex items-center font-medium text-white fill-white font-body direction-row",
        this.useVariantProp === VsfTagVariants.base && "bg-gray-600",
        this.useVariantProp === VsfTagVariants.info && "bg-secondary-800",
        this.useVariantProp === VsfTagVariants.positive && "bg-primary-600",
        this.useVariantProp === VsfTagVariants.warning && "bg-warning-600",
        this.useVariantProp === VsfTagVariants.error && "bg-negative-600",
        this.useVariantProp === VsfTagVariants.disabled &&
          "bg-gray-500 opacity-50",
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
