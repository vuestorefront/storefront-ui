import * as React from "react";

export interface VsfSearchProps {
  placeholder?: string;
  disabled?: boolean;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  slotSubmit?: SlotType;
  slotResults?: SlotType;
  onInput?: (...args: any[]) => void;
  onSubmit?: (...args: any[]) => void;
  onReset?: (...args: any[]) => void;
  modelValue?: string;
  value?: string;
  submitText?: string;
  name?: string;
  required?: boolean;
  autocomplete?: string;
}

import { classStringFromArray } from "../../functions/domUtils";
import VsfIconCancel from "../VsfIcons/VsfIconCancel.lite";
import VsfButton from "../VsfButton/VsfButton.lite";
import { SlotType } from "../../functions/types";
const DEFAULT_VALUES: Partial<Required<VsfSearchProps>> = {
  name: "search",
};

export default function VsfSearch(props: VsfSearchProps) {
  function useNameProp() {
    return props.name || DEFAULT_VALUES.name;
  }

  function onResetHandler(event) {
    event?.preventDefault();
    props.onReset && props.onReset(event);
  }

  function useValueProp() {
    return props.value;
  }

  function onInputHandler(event) {
    event.stopPropagation();
    props.onInput && props.onInput(event);
  }

  return (
    <div className="relative">
      <form
        role="search"
        aria-disabled={props.disabled ? "true" : "false"}
        className={classStringFromArray([
          "flex",
          props.disabled ? "cursor-not-allowed" : "",
        ])}
        onSubmit={(e) => props.onSubmit?.(e)}
      >
        <div
          className={classStringFromArray([
            "group",
            "relative flex-1 flex items-center p-2",
            "ring-1 ring-gray-200 ring-inset",
            "rounded-l-md",
            "only:rounded-r-md text-gray-500",
            props.disabled
              ? "bg-gray-100/50 ring-opacity-50 text-opacity-20"
              : "bg-white hover:ring-primary-500 focus-within:caret-primary-500 active:caret-primary-500 active:ring-primary-500 active:ring-2 focus-within:ring-primary-500 focus-within:ring-2",
          ])}
        >
          {props.slotPrefix ? (
            <>
              <span className="ml-2 inline-flex">{props.slotPrefix}</span>
            </>
          ) : null}

          <input
            role="searchbox"
            type="search"
            name={useNameProp()}
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={useValueProp()}
            onInput={(e) => onInputHandler(e)}
            required={props.required}
            autocomplete={props.autocomplete}
            className={classStringFromArray([
              "peer ml-2 outline-none bg-transparent text-gray-900 appearance-none placeholder:text-gray-500 font-body text-base block w-full ",
              "disabled:placeholder:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed",
            ])}
          />

          <span className="peer-placeholder-shown:hidden inline-block ml-2">
            <button
              type="reset"
              className="disabled:cursor-not-allowed flex items-center justify-center rounded-full"
              onClick={(e) => onResetHandler(e)}
              disabled={props.disabled}
            >
              <VsfIconCancel />
            </button>
          </span>

          {props.slotSuffix ? (
            <>
              <span className="ml-2 inline-flex">{props.slotSuffix}</span>
            </>
          ) : null}
        </div>

        {props.slotSubmit || props.submitText ? (
          <>
            <VsfButton
              type="submit"
              className="rounded-r-md"
              disabled={props.disabled}
              tile={true}
              icon={!props.submitText}
            >
              {props.slotSubmit}

              {props.submitText}
            </VsfButton>
          </>
        ) : null}
      </form>

      <div className="w-full relative">{props.slotResults}</div>
    </div>
  );
}
