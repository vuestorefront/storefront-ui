import * as React from "react";

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
  disabled: false,
};

export default function VsfButton(props: VsfButtonProps) {
  function defaults() {
    return DEFAULT_VALUES;
  }

  function useDisabledProp() {
    return props.disabled || defaults().disabled;
  }

  function useSizeProp() {
    return validator(Object.keys(VsfButtonSizes), props.size, defaults().size);
  }

  function useVariantProp() {
    return validator(
      Object.keys(VsfButtonVariants),
      props.variant,
      defaults().variant
    );
  }

  function buttonClasses() {
    return classStringFromArray([
      "inline-flex items-center justify-center border rounded-md cursor-pointer font-body disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50",
      useSizeProp() === VsfButtonSizes.sm
        ? "leading-5 px-3 py-[6px] text-sm"
        : useSizeProp() === VsfButtonSizes.base
        ? "px-4 py-2"
        : "px-6 py-3",
      useVariantProp() === VsfButtonVariants.tertiary ||
      useVariantProp() === VsfButtonVariants["destroy-tertiary"]
        ? "font-normal bg-transparent disabled:bg-transparent"
        : "font-medium uppercase shadow-base disabled:bg-gray-200 disabled:shadow-none",
      useVariantProp() === VsfButtonVariants.primary &&
        "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700",
      useVariantProp() === VsfButtonVariants.secondary &&
        "bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700 ",
      useVariantProp() === VsfButtonVariants.tertiary &&
        "bg-transparent text-primary-500 hover:bg-green-100 hover:text-primary-600 active:text-primary-700 active:bg-green-200",
      useVariantProp() === VsfButtonVariants["destroy-primary"] &&
        "text-base text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 hover:shadow-medium",
      useVariantProp() === VsfButtonVariants["destroy-secondary"] &&
        "text-base text-rose-600 bg-white border border-rose-400 disabled:border-0 hover:bg-rose-100 active:bg-rose-200 hover:text-rose-600 active:text-rose-700 hover:shadow-medium",
      useVariantProp() === VsfButtonVariants["destroy-tertiary"] &&
        "text-base text-rose-600 hover:bg-rose-100 hover:text-rose-700 active:bg-rose-200 active:text-rose-800",
    ]);
  }

  return (
    <>
      {props.link ? (
        <>
          <a role="button" href={props.link} className={buttonClasses()}>
            {props.slotPrefix ? (
              <>
                <span className="pr-2">{props.slotPrefix}</span>
              </>
            ) : null}

            {props.children}

            {props.slotSuffix ? (
              <>
                <span className="pl-2">{props.slotSuffix}</span>
              </>
            ) : null}
          </a>
        </>
      ) : (
        <button disabled={useDisabledProp()} className={buttonClasses()}>
          {props.slotPrefix ? (
            <>
              <span className="pr-2">{props.slotPrefix}</span>
            </>
          ) : null}

          {props.children}

          {props.slotSuffix ? (
            <>
              <span className="pl-2">{props.slotSuffix}</span>
            </>
          ) : null}
        </button>
      )}
    </>
  );
}
