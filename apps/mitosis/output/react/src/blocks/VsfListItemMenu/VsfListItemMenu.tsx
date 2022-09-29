import * as React from "react";

type VsfListItemMenuKeys = keyof typeof VsfListItemMenuSize;
export interface VsfListItemMenuProps {
  link?: string;
  size?: VsfListItemMenuKeys;
  selected: boolean;
  primaryText: string;
  secondaryText?: string;
  truncatedText?: boolean;
  counter?: string;
  disabled?: boolean;
  children?: SlotType;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  handleClick?: (e?: Event) => void;
}

import { SlotType } from "../../functions/types";
import { classStringFromArray } from "../../functions/domUtils";
import VsfCounter from "../VsfCounter/VsfCounter";
export const VsfListItemMenuSize = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES: Required<VsfListItemMenuProps> = {
  link: "",
  size: "base",
  selected: false,
  primaryText: "",
  secondaryText: "",
  counter: "",
  truncatedText: false,
  disabled: false,
};

export default function VsfListItemMenu(props: VsfListItemMenuProps) {
  function useLinkProp() {
    return props.link || DEFAULT_VALUES.link;
  }

  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }

  function useSelectedProp() {
    return props.selected || DEFAULT_VALUES.selected;
  }

  function usePrimaryTextProp() {
    return props.primaryText || DEFAULT_VALUES.primaryText;
  }

  function useSecondaryTextProp() {
    return props.secondaryText || DEFAULT_VALUES.secondaryText;
  }

  function useCounterProp() {
    return props.counter || DEFAULT_VALUES.counter;
  }

  function useTruncatedTextProp() {
    return props.truncatedText || DEFAULT_VALUES.truncatedText;
  }

  function useDisabled() {
    return props.disabled || DEFAULT_VALUES.disabled;
  }

  function slotPrefixClass() {
    return classStringFromArray([
      props.slotPrefix && "pr-2",
      `vsf-icon-${useSizeProp() === "sm" ? "sm" : "base"}`,
      useSelectedProp() ? "text-gray-900" : "text-gray-500",
      "flex items-center group-hover:text-primary-600 group-active:text-primary-700",
    ]);
  }

  function textClass() {
    return classStringFromArray([
      useSizeProp() === "sm" ? "pr-7" : "pr-8",
      useTruncatedTextProp() ? "inline-block truncate" : "break-all",
      "flex flex-col",
    ]);
  }

  function listItemMenuSizes() {
    switch (useSizeProp()) {
      case VsfListItemMenuSize.sm:
        return "h-8 text-sm py-[1.5] pr-3 pl-4";

      case VsfListItemMenuSize.lg:
        return "h-14 py-4 pr-3 pl-4";

      default:
        return "h-10 py-2 pr-3 pl-4";
    }
  }

  function mainClass() {
    return classStringFromArray([
      "group flex w-full justify-start items-center relative font-body text-gray-900 cursor-pointer",
      useSecondaryTextProp() ? "pl-4" : listItemMenuSizes(),
      useTruncatedTextProp() ? "overflow-hidden" : "",
      useSelectedProp() ? "bg-gray-100" : "",
      useDisabled()
        ? "gray-900/40 pointer-events-none opacity-50"
        : "hover:text-primary-600 hover:bg-gray-100 active:text-primary-700 active:bg-gray-200 focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400",
    ]);
  }

  function click(event) {
    props.handleClick && props.handleClick(event);
  }

  return (
    <>
      {useLinkProp() ? (
        <>
          <a
            role="button"
            aria-role="menuitem"
            href={useLinkProp()}
            className={mainClass()}
            disabled={useDisabled()}
            aria-disabled={useDisabled()}
          >
            {props.slotPrefix ? (
              <>
                <span className={slotPrefixClass()}>{props.slotPrefix}</span>
              </>
            ) : null}

            <span className={textClass()}>
              <span
                className={`flex flex-wrap ${
                  useSelectedProp() ? "font-medium" : ""
                }`}
              >
                {usePrimaryTextProp()}

                {useCounterProp() && !useSecondaryTextProp() ? (
                  <>
                    <VsfCounter
                      size="lg"
                      className="ml-2 group-disabled:opacity-40"
                    >
                      {useCounterProp()}
                    </VsfCounter>
                  </>
                ) : null}
              </span>

              <span
                className={`text-left ${
                  useTruncatedTextProp() ? "truncate" : ""
                }`}
              >
                {useSecondaryTextProp()}

                {useCounterProp() && useSecondaryTextProp() ? (
                  <>
                    <VsfCounter
                      size="lg"
                      className="ml-2 group-disabled:opacity-40"
                    >
                      {useCounterProp()}
                    </VsfCounter>
                  </>
                ) : null}
              </span>
            </span>

            {props.slotSuffix ? (
              <>
                <span
                  className={`absolute right-3 vsf-icon-${
                    useSizeProp() === "sm" ? "sm" : "base"
                  }`}
                >
                  {props.slotSuffix}
                </span>
              </>
            ) : null}
          </a>
        </>
      ) : (
        <button
          className={mainClass()}
          disabled={useDisabled()}
          onClick={(event) => click(event)}
          aria-disabled={useDisabled()}
        >
          {props.slotPrefix ? (
            <>
              <span className={slotPrefixClass()}>{props.slotPrefix}</span>
            </>
          ) : null}

          <span className={textClass()}>
            <span
              className={`flex flex-wrap ${
                useSelectedProp() ? "font-medium" : ""
              }`}
            >
              {usePrimaryTextProp()}

              {useCounterProp() && !useSecondaryTextProp() ? (
                <>
                  <VsfCounter
                    size="lg"
                    className="ml-2 group-disabled:opacity-40"
                  >
                    {useCounterProp()}
                  </VsfCounter>
                </>
              ) : null}
            </span>

            <span
              className={`text-left ${
                useTruncatedTextProp() ? "truncate" : ""
              }`}
            >
              {useSecondaryTextProp()}

              {useCounterProp() && useSecondaryTextProp() ? (
                <>
                  <VsfCounter
                    size="lg"
                    className="ml-2 group-disabled:opacity-40"
                  >
                    {useCounterProp()}
                  </VsfCounter>
                </>
              ) : null}
            </span>
          </span>

          {props.slotSuffix ? (
            <>
              <span
                className={`absolute right-3 vsf-icon-${
                  useSizeProp() === "sm" ? "sm" : "base"
                }`}
              >
                {props.slotSuffix}
              </span>
            </>
          ) : null}
        </button>
      )}
    </>
  );
}
