import * as React from "react";

type VsfRadioVariantsKeys = keyof typeof VsfRadioVariants;
type VsfRadioSizeKeys = keyof typeof VsfRadioSize;
type VsfRadioAlignmentKeys = keyof typeof VsfRadioAlignment;
export interface VsfRadioProps {
  id: string;
  variant?: VsfRadioVariantsKeys;
  name?: string;
  value?: string | string[] | number;
  disabled?: boolean;
  selected?: string;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  modelValue?: any;
  size?: VsfRadioSizeKeys;
  alignment?: VsfRadioAlignmentKeys;
  onChange?: (...args: any[]) => void;
}

import { classStringFromArray } from "../../functions/domUtils";
export const VsfRadioVariants = Object.freeze({
  base: "base",
  tile: "tile",
});
export const VsfRadioSize = Object.freeze({
  lg: "lg",
  base: "base",
  sm: "sm",
});
export const VsfRadioAlignment = Object.freeze({
  left: "left",
  right: "right",
});
const DEFAULT_VALUES: Required<VsfRadioProps> = {
  id: "",
  variant: VsfRadioVariants.base,
  name: "",
  value: "",
  disabled: false,
  selected: "",
  invalid: false,
  label: "Label",
  helpText: "Help text",
  modelValue: "",
  size: VsfRadioSize.base,
  alignment: VsfRadioAlignment.left,
  onChange: () => {},
};

export default function VsfRadio(props: VsfRadioProps) {
  function useIdProp() {
    return props.id;
  }

  function useVariantProp() {
    return props.variant ?? DEFAULT_VALUES.variant;
  }

  function useAlignmentProp() {
    return props.alignment ?? DEFAULT_VALUES.alignment;
  }

  function useSizeProp() {
    return props.size ?? DEFAULT_VALUES.size;
  }

  function useInvalidProp() {
    return props.invalid ?? DEFAULT_VALUES.invalid;
  }

  function useDisabledProp() {
    return props.disabled ?? DEFAULT_VALUES.disabled;
  }

  function useValueProp() {
    return props.value ?? DEFAULT_VALUES.value;
  }

  function useSelectedProp() {
    return props.selected ?? DEFAULT_VALUES.selected;
  }

  function useNameProp() {
    return props.name ?? DEFAULT_VALUES.name;
  }

  function useLabelProp() {
    return props.label ?? DEFAULT_VALUES.label;
  }

  function useHelpTextProp() {
    return props.helpText ?? DEFAULT_VALUES.helpText;
  }

  function inputClasses() {
    return classStringFromArray([
      "w-5 h-5 my-1 border-2 border-gray-500 rounded-full appearance-none cursor-pointer hover:border-primary-600 hover:checked:bg-primary-600 checked:bg-primary-700 checked:border-primary-700 checked:shadow-inset",
      useVariantProp() !== VsfRadioVariants.base &&
        "disabled:border-gray-500/50",
      useInvalidProp() &&
        "border-negative-600 hover:border-negative-600 checked:border-negative-700",
      useDisabledProp() && "!border-gray-500 opacity-50 cursor-not-allowed",
      useAlignmentProp() === VsfRadioAlignment.left && "ml-1 mr-2",
      isChecked() &&
        useDisabledProp() &&
        "!border-gray-500 !bg-gray-500 opacity-50",
    ]);
  }

  function labelClasses() {
    return classStringFromArray([
      "flex flex-wrap items-center text-gray-900 cursor-pointer text-base peer-required:after:content-['*'] disabled:text-gray-900/40 font-body",
      useAlignmentProp() === VsfRadioAlignment.right &&
        "flex-row-reverse justify-between",
      useDisabledProp() && "!border-gray-500 opacity-50 cursor-not-allowed",
      useSizeProp() === VsfRadioSize.lg && "py-4",
      useSizeProp() === VsfRadioSize.base && "py-2",
      useSizeProp() === VsfRadioSize.sm && "py-1",
      useVariantProp() === VsfRadioVariants.tile &&
        "px-4 hover:bg-gray-100 rounded-md cursor-pointer",
    ]);
  }

  function helpTextClasses() {
    return classStringFromArray([
      "w-full text-xs text-gray-500 peer-disabled:text-gray-500/50",
      useAlignmentProp() === VsfRadioAlignment.left && "ml-8",
      useDisabledProp() && "opacity-50",
    ]);
  }

  function isChecked() {
    return (useValueProp() || props.modelValue) === useSelectedProp();
  }

  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }

  return (
    <div className="max-w-xs">
      <label htmlFor={useIdProp()} className={labelClasses()}>
        <input
          type="radio"
          id={useIdProp()}
          name={useNameProp()}
          value={useValueProp()}
          disabled={useDisabledProp()}
          checked={isChecked()}
          onChange={(e) => onChangeHandler(e)}
          className={inputClasses()}
        />

        {useLabelProp()}

        <div className={helpTextClasses()}>
          <span
            className={classStringFromArray([
              useAlignmentProp() === "left" && "",
            ])}
          >
            {useHelpTextProp()}
          </span>
        </div>
      </label>
    </div>
  );
}
