import * as React from "react";

type VsfSpinnerTypesKeys = keyof typeof VsfSpinnerTypes;
type VsfSpinnerSizesKeys = keyof typeof VsfSpinnerVariants;
export interface VsfSpinnerProps {
  type?: VsfSpinnerTypesKeys;
  variant?: VsfSpinnerSizesKeys;
}

export const VsfSpinnerTypes = Object.freeze({
  base: "base",
  linear: "linear",
});
export const VsfSpinnerVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
});
const DEFAULT_VALUES = {
  type: VsfSpinnerTypes.base,
  variant: VsfSpinnerVariants.base,
};

export default function VsfSpinner(props: VsfSpinnerProps) {
  function useTypeProp() {
    return props.type ?? DEFAULT_VALUES.type;
  }

  function useSizeProp() {
    return props.variant ?? DEFAULT_VALUES.variant;
  }

  function sizeClasses() {
    switch (useSizeProp()) {
      case VsfSpinnerVariants.sm:
        return "w-4 h-4";

      case VsfSpinnerVariants.lg:
        return "w-10 h-10";

      case VsfSpinnerVariants.xl:
        return "w-14 h-14";

      case VsfSpinnerVariants["2xl"]:
        return "w-24 h-24";

      case VsfSpinnerVariants["3xl"]:
        return "w-48 h-48";

      default:
        return "w-6 h-6";
    }
  }

  function sizeClassesWithBorder() {
    switch (useSizeProp()) {
      case VsfSpinnerVariants.sm:
        return `${sizeClasses()} border-2`;

      case VsfSpinnerVariants.lg:
        return `${sizeClasses()} border-2`;

      case VsfSpinnerVariants.xl:
        return `${sizeClasses()} border-[3px]`;

      case VsfSpinnerVariants["2xl"]:
        return `${sizeClasses()} border-4`;

      case VsfSpinnerVariants["3xl"]:
        return `${sizeClasses()} border-8`;

      default:
        return `${sizeClasses()} border-2`;
    }
  }

  return (
    <>
      {useTypeProp() === VsfSpinnerTypes.base ? (
        <>
          <div role="progressbar" className={`relative ${sizeClasses()}`}>
            <div className="sr-only" role="alert">
              loading
            </div>

            <div
              aria-hidden="true"
              className={`absolute bg-transparent border-gray-200 rounded-full ${sizeClassesWithBorder()}`}
            />

            <div
              aria-hidden="true"
              className={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600 ${sizeClassesWithBorder()}`}
            />

            <div
              aria-hidden="true"
              className={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`}
            />

            <div
              aria-hidden="true"
              className={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`}
            />

            <div
              aria-hidden="true"
              className={`absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`}
            />
          </div>
        </>
      ) : (
        <div className="relative h-1 overflow-hidden">
          <div className="sr-only" role="alert">
            loading...
          </div>

          <div className="absolute w-full h-1 bg-gray-200" aria-hidden="true" />

          <div
            className="absolute w-2.5 h-1 animate-linear-loader bg-primary-600"
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
