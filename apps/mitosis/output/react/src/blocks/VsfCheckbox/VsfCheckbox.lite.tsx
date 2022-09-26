import * as React from "react";
import { useRef, useEffect } from "react";

export interface VsfCheckboxProps {
  value?: string | string[] | number;
  required?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  label?: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  reverse?: boolean;
  checked?: boolean;
  onChange?: (...args: any[]) => void;
  modelValue?: any;
  className?: string;
}

import { classStringFromArray } from "../../functions/domUtils";

export default function VsfCheckbox(props: VsfCheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function inputClasses() {
    return classStringFromArray([
      "peer flex self-center w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer disabled:cursor-not-allowed outline-violet",
      "text-gray-500",
      "hover:checked:text-primary-600 active:checked:text-primary-700 checked:text-primary-500 checked:!border-transparent ",
      "checked:bg-checked-checkbox-current border-current",
      "indeterminate:bg-indeterminate-checkbox-current",
      "indeterminate:text-primary-500",
      props.disabled
        ? "disabled:!text-[#b8b8bc]"
        : props.invalid
        ? "border-negative-500 hover:border-negative-600 active:border-negative-700"
        : "hover:text-primary-600 active:text-primary-700",
      props.className,
    ]);
  }

  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }

  useEffect(() => {
    inputRef.current.indeterminate = Boolean(props.indeterminate);
  }, [props.indeterminate]);

  return (
    <div className="py-2">
      <label
        className={classStringFromArray([
          "flex w-full items-center gap-2",
          props.disabled ? "cursor-not-allowed" : "cursor-pointer",
          props.reverse ? "flex-row-reverse justify-between" : "flex-row",
        ])}
      >
        <span className="p-1">
          <input
            type="checkbox"
            ref={inputRef}
            className={inputClasses()}
            disabled={props.disabled}
            required={props.required}
            indeterminate={props.indeterminate}
            invalid={props.invalid}
            checked={props.checked}
            onChange={(e) => onChangeHandler(e)}
            value={props.value}
          />
        </span>

        <span
          className={classStringFromArray([
            "text-gray-900 font-body text-base",
            props.disabled && "text-opacity-40",
            props.required && `after:content-['*']`,
          ])}
        >
          {props.label}
        </span>
      </label>

      <div className={classStringFromArray([props.reverse ? "ml-0" : "ml-8"])}>
        {props.invalid && props.errorText ? (
          <>
            <div
              className={classStringFromArray([
                "mt-0.5 text-sm font-medium font-body",
                props.disabled ? "text-gray-500/50" : "text-negative-600",
              ])}
            >
              {props.errorText}
            </div>
          </>
        ) : null}

        {props.helpText ? (
          <>
            <div
              className={classStringFromArray([
                "mt-0.5 text-xs font-body text-gray-500",
                props.disabled && "text-opacity-50",
              ])}
            >
              {props.helpText}
            </div>
          </>
        ) : null}
      </div>

      {props.required && props.requiredText ? (
        <>
          <div
            className={classStringFromArray([
              "mt-4 text-sm text-gray-500 font-body",
              props.disabled && "text-opacity-50",
            ])}
          >
            {props.requiredText}
          </div>
        </>
      ) : null}
    </div>
  );
}
