import * as React from "react";

export type VsfSelectOption = {
  label?: string;
  value?: string;
};
export interface VsfSelectProps {
  name: string;
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  options?: VsfSelectOption[];
  placeholderText?: string;
  requiredText?: string;
  helpText?: string;
  errorText?: string;
  modelValue?: any;
  onChange?: (...args: any[]) => void;
}

import { classStringFromArray } from "../../functions/domUtils";
const DEFAULT_VALUES = {
  label: "",
  value: "",
  options: [],
  required: false,
  disabled: false,
  invalid: false,
  placeholderText: "--Please choose an option--",
  requiredText: "*Required",
  helpText: "Help text",
  errorText: "Error text",
};

export default function VsfSelect(props: VsfSelectProps) {
  function useValue() {
    return props.value || DEFAULT_VALUES.value;
  }

  function useOptions() {
    return props.options || DEFAULT_VALUES.options;
  }

  function useRequired() {
    return props.required || DEFAULT_VALUES.required;
  }

  function useDisabled() {
    return props.disabled || DEFAULT_VALUES.disabled;
  }

  function useLabel() {
    return props.label || DEFAULT_VALUES.label;
  }

  function useHelpText() {
    return props.helpText || DEFAULT_VALUES.helpText;
  }

  function useRequiredText() {
    return props.requiredText || DEFAULT_VALUES.requiredText;
  }

  function usePlaceholderText() {
    return props.placeholderText || DEFAULT_VALUES.placeholderText;
  }

  function useErrorText() {
    return props.errorText || DEFAULT_VALUES.errorText;
  }

  function errorTextClasses() {
    return classStringFromArray([
      "order-3 mt-1 text-sm font-medium text-negative-600 peer-disabled:cursor-not-allowed",
      props.invalid ? "block" : "hidden",
    ]);
  }

  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }

  return (
    <div className="relative">
      <div className="after:absolute box-border flex flex-col font-body after:pointer-events-none         after:content-['<>'] after:top-10 after:right-[14px] after:rotate-90         after:font-base after:text-xl after:text-gray-500 after:z-0">
        <select
          className="disabled:cursor-not-allowed remove-default-styling order-2           peer py-3 pl-[16px] pr-3.5 m-px required:m-0 invalid:m-0 active:m-0           text-gray-900 bg-transparent border border-gray-300 rounded-md           hover:border-primary-400 active:border-2 active:border-primary-500           disabled:bg-gray-100 disabled:opacity-50  disabled:text-gray-900/40           disabled:border-gray-200 invalid:border-negative-600 invalid:border-2 outline-violet"
          id={`select-${props.name}`}
          value={useValue()}
          required={useRequired()}
          disabled={useDisabled()}
          selected={useValue()}
          onChange={(e) => onChangeHandler(e)}
        >
          <option value="" className="font-[Arial] bg-gray-300" disabled={true}>
            {usePlaceholderText()}
          </option>

          {useOptions()?.map((option, index) => (
            <option
              className="font-[Arial] bg-gray-300"
              key={index}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <label
          className="peer-required:after:content-['*'] peer-required:after:text-sm order-1 mt-2 text-sm text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed font-medium"
          htmlFor={`select-${props.name}`}
        >
          {useLabel()}
        </label>

        <span className={errorTextClasses()}>{useErrorText()}</span>

        <span className="order-4 mt-1 text-xs text-gray-500 peer-disabled:text-gray-500/50 peer-disabled:cursor-not-allowed">
          {useHelpText()}
        </span>

        <span className="order-5 hidden mt-1 text-xs text-gray-500 peer-required:block peer-disabled:cursor-not-allowed">
          {useRequiredText()}
        </span>
      </div>
    </div>
  );
}
