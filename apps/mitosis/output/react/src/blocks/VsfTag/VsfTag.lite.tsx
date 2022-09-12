import * as React from "react";
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

export default function VsfTag(props: VsfTagProps) {
  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }

  function useVariantProp() {
    return props.variant || DEFAULT_VALUES.variant;
  }

  function useBadgeProp() {
    return props.badge || DEFAULT_VALUES.badge;
  }

  function tagVariants() {
    return classStringFromArray([
      "inline-flex font-normal rounded-md font-body items-center",
      useVariantProp() === VsfTagVariants.base && "bg-gray-100 text-gray-600",
      useVariantProp() === VsfTagVariants.info &&
        "bg-secondary-100 text-secondary-800",
      useVariantProp() === VsfTagVariants.positive &&
        "bg-primary-100 text-primary-600",
      useVariantProp() === VsfTagVariants.warning &&
        "bg-warning-100 text-warning-700",
      useVariantProp() === VsfTagVariants.error &&
        "bg-negative-100 text-negative-700",
      useVariantProp() === VsfTagVariants.disabled &&
        "bg-gray-100 text-gray-500 opacity-50",
    ]);
  }

  function tagSizes() {
    switch (useSizeProp()) {
      case VsfTagSizes.sm:
        return "px-2 py-1 text-xs";

      default:
        return "px-3 py-1 text-sm";
    }
  }

  function badgeSizes() {
    return useSizeProp() === "sm"
      ? "border-b-[24px] border-l-[12px]"
      : "border-b-[32px] border-l-[16px]";
  }

  function badgeBorderColors() {
    return classStringFromArray([
      "border-t-0 border-b-transparent border-t-transparent bg-transparent",
      useVariantProp() === VsfTagVariants.base && "border-l-gray-600",
      useVariantProp() === VsfTagVariants.info && "border-l-secondary-800",
      useVariantProp() === VsfTagVariants.positive && "border-l-primary-600",
      useVariantProp() === VsfTagVariants.warning && "border-l-warning-600",
      useVariantProp() === VsfTagVariants.error && "border-l-negative-600",
      useVariantProp() === VsfTagVariants.disabled &&
        "border-gray-500 opacity-50",
    ]);
  }

  function badgeColors() {
    return classStringFromArray([
      "inline-flex items-center font-medium text-white fill-white font-body direction-row",
      useVariantProp() === VsfTagVariants.base && "bg-gray-600",
      useVariantProp() === VsfTagVariants.info && "bg-secondary-800",
      useVariantProp() === VsfTagVariants.positive && "bg-primary-600",
      useVariantProp() === VsfTagVariants.warning && "bg-warning-600",
      useVariantProp() === VsfTagVariants.error && "bg-negative-600",
      useVariantProp() === VsfTagVariants.disabled && "bg-gray-500 opacity-50",
    ]);
  }

  return (
    <>
      {!useBadgeProp() ? (
        <>
          <div className={`${tagVariants()} ${tagSizes()}`}>
            {props.slotPrefix ? (
              <>
                <div
                  className={`${
                    useSizeProp() === VsfTagSizes.sm ? "w-4 h-4" : "w-5 h-5"
                  } mr-1 flex`}
                >
                  {props.slotPrefix}
                </div>
              </>
            ) : null}

            {props.children}

            {props.slotSuffix ? (
              <>
                <div
                  className={`${
                    useSizeProp() === VsfTagSizes.sm ? "w-4 h-4" : "w-5 h-5"
                  } ml-1 flex`}
                >
                  {props.slotSuffix}
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : (
        <div className="inline-flex items-center">
          <div
            className={`${
              useSizeProp() === "sm" ? "h-6 text-xs" : "h-8 text-sm"
            } flex direction-row`}
          >
            <div className={`${badgeColors()}`}>
              {props.slotPrefix ? (
                <>
                  <span
                    className={`${
                      useSizeProp() === "sm" ? "w-4 h-4" : "w-5 h-5"
                    } flex direction-row ml-2`}
                  >
                    {props.slotPrefix}
                  </span>
                </>
              ) : null}

              <span className="mx-2">{props.children}</span>
            </div>

            <div className={`${badgeBorderColors()} ${badgeSizes()}`} />
          </div>
        </div>
      )}
    </>
  );
}
