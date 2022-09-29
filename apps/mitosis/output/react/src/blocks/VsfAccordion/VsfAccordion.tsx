import * as React from "react";
import { useRef } from "react";

type VsfAccordionHeaderSizeKeys = keyof typeof VsfAccordionHeaderSize;
export interface VsfAccordionProps {
  open: boolean;
  title?: string;
  chevronLeft?: boolean;
  headerSize?: VsfAccordionHeaderSizeKeys;
  slotSuffix?: SlotType;
  children?: SlotType;
}

import { validator } from "../../functions/propUtils";
import { SlotType } from "../../functions/types";
import VsfIconTriangleUp from "../VsfIcons/VsfIconTriangleUp";
export const VsfAccordionHeaderSize = Object.freeze({
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES = {
  open: false,
  title: "",
  chevronLeft: false,
  headerSize: VsfAccordionHeaderSize.base,
};

export default function VsfAccordion(props: VsfAccordionProps) {
  const details = useRef<HTMLElement>(null);
  function useChevronLeftProp() {
    return props.chevronLeft || DEFAULT_VALUES.chevronLeft;
  }

  function useHeaderSizeProp() {
    return validator(
      Object.keys(VsfAccordionHeaderSize),
      props.headerSize,
      DEFAULT_VALUES.headerSize
    );
  }

  function headerSizeClass() {
    switch (useHeaderSizeProp()) {
      case VsfAccordionHeaderSize.lg:
        return "h-14";

      default:
        return "h-10";
    }
  }

  return (
    <>
      <details
        className={`${headerSizeClass()} vsf-accordion w-full text-gray-900 normal-case border-none rounded-none shadow-none cursor-pointer h-11 font-body disabled:cursor-not-allowed`}
        open={props.open}
      >
        <summary
          className={`${
            useChevronLeftProp()
              ? "flex-row-reverse justify-end"
              : "justify-between"
          } vsf-accordion__header group w-full inline-flex items-center p-4 hover:shadow-none hover:text-primary-600 hover:bg-gray-100 active:text-gray-900 outline-violet`}
        >
          {props.slotPrefix}

          {!props.slotPrefix ? (
            <>
              <span
                className={`${
                  useChevronLeftProp() ? "ml-2" : ""
                } text-base font-medium`}
              >
                {props.title}
              </span>
            </>
          ) : null}

          {props.slotSuffix}

          {!props.slotSuffix ? (
            <>
              <VsfIconTriangleUp className="w-6 h-6 transition-transform vsf-accordion__icon fill-gray-500 group-hover:fill-primary-600 group-active:fill-gray-500" />
            </>
          ) : null}
        </summary>

        <div className="px-4 py-2 text-gray-500">{props.children}</div>
      </details>
    </>
  );
}
