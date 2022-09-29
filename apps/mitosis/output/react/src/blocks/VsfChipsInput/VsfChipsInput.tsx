import * as React from "react";

export type VsfChipsInputVariantsKeys = keyof typeof VsfChipsInputVariants;
export interface VsfChipsInputProps {
  size?: VsfChipsInputVariantsKeys;
  label?: any;
  disabled?: boolean;
  slotPrefix?: any;
  slotClose?: any;
  handleChipClose?: (e?: Event) => void;
} // TODO: refactor, no important, no borders, icon changed so spacings as well

import VsfIconClose from "../VsfIcons/VsfIconClose";
export const VsfChipsInputVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});

export default function VsfChipsInput(props: VsfChipsInputProps) {
  function chipsSize() {
    switch (props.size) {
      case VsfChipsInputVariants.sm:
        return "sm";

      default:
        return "base";
    }
  }

  function closeSize() {
    switch (props.size) {
      case VsfChipsInputVariants.lg:
        return "base";

      default:
        return "sm";
    }
  }

  function sizeClass() {
    switch (props.size) {
      case VsfChipsInputVariants.sm:
        return "size--sm";

      case VsfChipsInputVariants.lg:
        return "size--lg";

      default:
        return "size--base";
    }
  }

  function disabledClass() {
    return props.disabled ? "chip--disabled" : "";
  }

  function close(event) {
    props.handleChipClose && props.handleChipClose(event);
  }

  return (
    <>
      <div
        className={`chip chip--primary transition duration-300 ease ${sizeClass()} ${disabledClass()}`}
      >
        <div className={`chip__left-icon vsf-icon-${chipsSize()}`}>
          {props.slotPrefix}
        </div>

        {props.label ? (
          <>
            <span className="chip__content text-gray-900">{props.label}</span>
          </>
        ) : null}

        {props.slotClose}

        {!props.slotClose && !props.disabled ? (
          <>
            <button
              className="bg-transparent inline-flex chip__right-icon group"
              onClick={(event) => close(event)}
            >
              <VsfIconClose
                className="transition-colors duration-300 ease text-gray-500 group-hover:text-primary-600 group-focus-within:text-primary-600 group-active:text-primary-700"
                size={closeSize()}
                ariaLabel={`Close ${props.label} chip`}
              />
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}
