import * as React from "react";
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

export default function VsfRadioGroup(props: VsfRadioGroupProps) {
  function useDirectionProp() {
    return props.direction ?? DEFAULT_VALUES.direction;
  }

  function useVariantProp() {
    return props.variant ?? DEFAULT_VALUES.variant;
  }

  function useIsInvalidProp() {
    return props.isInvalid ?? DEFAULT_VALUES.isInvalid;
  }

  function useErrorTextProp() {
    return props.errorText ?? DEFAULT_VALUES.errorText;
  }

  function useRequiredTextProp() {
    return props.requiredText ?? DEFAULT_VALUES.requiredText;
  }

  function useHelpTextProp() {
    return props.helpText ?? DEFAULT_VALUES.helpText;
  }

  function useRequiredProp() {
    return props.required ?? DEFAULT_VALUES.required;
  }

  function spanClasses() {
    return classStringFromArray([
      "mt-1 text-xs text-gray-500 peer-required:block font-body",
      !useRequiredProp() && "hidden",
    ]);
  }

  function childrenClasses() {
    return classStringFromArray([
      "flex",
      useDirectionProp() === VsfRadioGroupDirection.vertical
        ? "flex-col"
        : "flex-row gap-4",
    ]);
  }

  function additionalTextClasses() {
    return classStringFromArray([
      "flex flex-col text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body",
      useVariantProp() === VsfRadioGroupVariants.tile && "pl-4",
    ]);
  }

  return (
    <fieldset
      role="radiogroup"
      className=""
      aria-required={true}
      aria-invalid={true}
      aria-describedby={`radio-${useVariantProp()}-error`}
    >
      <div className={childrenClasses()}>{props.children}</div>

      <div className={additionalTextClasses()}>
        <span
          id={`radio-${useVariantProp()}-error`}
          className={classStringFromArray([
            "block col-span-2 my-1 text-sm font-medium text-negative-600 font-body",
            !useIsInvalidProp() && "hidden",
          ])}
        >
          {useErrorTextProp()}
        </span>

        <span className="">{useHelpTextProp()}</span>

        <span className={spanClasses()}>{useRequiredTextProp()}</span>
      </div>
    </fieldset>
  );
}
