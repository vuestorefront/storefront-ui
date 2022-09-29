<template>
  <fieldset
    role="radiogroup"
    :aria-required="true"
    :aria-invalid="true"
    :aria-describedby="`radio-${useVariantProp}-error`"
  >
    <div :class="_classStringToObject(childrenClasses)">
      <slot />
    </div>
    <div :class="_classStringToObject(additionalTextClasses)">
      <span
        :id="`radio-${useVariantProp}-error`"
        :class="
          _classStringToObject(
            classStringFromArray([
              'block col-span-2 my-1 text-sm font-medium text-negative-600 font-body',
              !useIsInvalidProp && 'hidden',
            ])
          )
        "
      >
        {{ useErrorTextProp }}
      </span>
      <span>
        {{ useHelpTextProp }}
      </span>
      <span :class="_classStringToObject(spanClasses)">
        {{ useRequiredTextProp }}
      </span>
    </div>
  </fieldset>
</template>

<script lang="ts">
import type { SlotType } from "../../functions/types";
type VsfRadioGroupDirectionKeys = keyof typeof VsfRadioGroupDirection;
type VsfRadioGroupVariantsKeys = keyof typeof VsfRadioGroupVariants;
export interface VsfRadioGroupProps {
  direction?: VsfRadioGroupDirectionKeys;
  variant?: VsfRadioGroupVariantsKeys;
  children?: SlotType;
  isInvalid?: boolean;
  errorText?: string;
  requiredText?: string;
  helpText?: string;
  required?: boolean;
}

import { classStringFromArray } from "../../functions/domUtils";
export const VsfRadioGroupDirection = Object.freeze({
  vertical: "vertical",
  horizontal: "horizontal",
});
export const VsfRadioGroupVariants = Object.freeze({
  base: "base",
  tile: "tile",
});
const DEFAULT_VALUES: VsfRadioGroupProps = {
  direction: VsfRadioGroupDirection.vertical,
  variant: VsfRadioGroupVariants.base,
  children: "",
  isInvalid: false,
  errorText: "Error message",
  requiredText: "*Required",
  helpText: "Help text",
  required: false,
};

export default {
  name: "vsf-radio-group",

  props: [
    "direction",
    "variant",
    "isInvalid",
    "errorText",
    "requiredText",
    "helpText",
    "required",
  ],

  data: () => ({ classStringFromArray }),

  computed: {
    useDirectionProp() {
      return this.direction ?? DEFAULT_VALUES.direction;
    },
    useVariantProp() {
      return this.variant ?? DEFAULT_VALUES.variant;
    },
    useIsInvalidProp() {
      return this.isInvalid ?? DEFAULT_VALUES.isInvalid;
    },
    useErrorTextProp() {
      return this.errorText ?? DEFAULT_VALUES.errorText;
    },
    useRequiredTextProp() {
      return this.requiredText ?? DEFAULT_VALUES.requiredText;
    },
    useHelpTextProp() {
      return this.helpText ?? DEFAULT_VALUES.helpText;
    },
    useRequiredProp() {
      return this.required ?? DEFAULT_VALUES.required;
    },
    spanClasses() {
      return classStringFromArray([
        "mt-1 text-xs text-gray-500 peer-required:block font-body",
        !this.useRequiredProp && "hidden",
      ]);
    },
    childrenClasses() {
      return classStringFromArray([
        "flex",
        this.useDirectionProp === VsfRadioGroupDirection.vertical
          ? "flex-col"
          : "flex-row gap-4",
      ]);
    },
    additionalTextClasses() {
      return classStringFromArray([
        "flex flex-col text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body",
        this.useVariantProp === VsfRadioGroupVariants.tile && "pl-4",
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
