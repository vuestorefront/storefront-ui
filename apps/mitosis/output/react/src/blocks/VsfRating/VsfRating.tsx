import * as React from "react";

type VsfRatingVariantsKeys = keyof typeof VsfRatingVariants;
type VsfRatingTypesKeys = keyof typeof VsfRatingTypes;
export interface VsfRatingProps {
  value?: number;
  max?: number;
  reviews?: number;
  size?: VsfRatingVariantsKeys;
  type?: VsfRatingTypesKeys;
}

import VsfIconStar from "../VsfIcons/VsfIconStar";
import VsfIconStarOutline from "../VsfIcons/VsfIconStarOutline";
import VsfIconStarPartiallyFilled from "../VsfIcons/VsfIconStarPartiallyFilled";
import VsfCounter from "../VsfCounter/VsfCounter";
export const VsfRatingVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
});
export const VsfRatingTypes = Object.freeze({
  base: "base",
  withValue: "withValue",
});
const DEFAULT_VALUES = {
  value: 0,
  max: 5,
  size: VsfRatingVariants.base,
  type: VsfRatingTypes.base,
};

export default function VsfRating(props: VsfRatingProps) {
  function useValueProp() {
    return Math.max(
      0,
      Math.min(Number(props.value) || DEFAULT_VALUES.value, useMaxProp())
    );
  }

  function useMaxProp() {
    return Number(props.max) || DEFAULT_VALUES.max;
  }

  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }

  function useTypeProp() {
    return props.type || DEFAULT_VALUES.type;
  }

  function isPartiallyFilled() {
    return useValueProp() % 1 > 0.25 && useValueProp() % 1 < 0.75;
  }

  function filled() {
    return Math.floor(useValueProp()) + (useValueProp() % 1 > 0.75);
  }

  function empty() {
    return useMaxProp() - filled() - Number(isPartiallyFilled());
  }

  function ratingValue() {
    return Math.min(useValueProp(), useMaxProp());
  }

  function ratingSize() {
    return {
      xs: "base",
      sm: "base",
      base: "lg",
      lg: "xl",
      xl: "2xl",
    }[useSizeProp()];
  }

  function textClass() {
    return {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-lg",
      "2xl": "text-lg",
    }[useSizeProp()];
  }

  function isBaseType() {
    return useTypeProp() === VsfRatingTypes.base;
  }

  return (
    <>
      <div
        role="img"
        className={`flex items-center h-6 font-normal pointer-events-none font-body ${textClass()}`}
        aria-label={`Rating: ${useValueProp()} out of ${useMaxProp()} stars`}
      >
        {isBaseType() ? (
          <>
            {[...Array(filled())]?.map((_, index) => (
              <VsfIconStar
                aria-hidden="true"
                className="text-warning-500"
                key={index}
                size={useSizeProp()}
              />
            ))}
            {isPartiallyFilled() ? (
              <>
                <VsfIconStarPartiallyFilled
                  aria-hidden="true"
                  className="text-warning-500"
                  size={useSizeProp()}
                />
              </>
            ) : null}
            {[...Array(empty())]?.map((_, index) => (
              <VsfIconStarOutline
                aria-hidden="true"
                className="text-gray-500 opacity-50"
                key={index}
                size={useSizeProp()}
              />
            ))}
          </>
        ) : (
          <>
            <VsfIconStar
              aria-hidden="true"
              className="text-warning-500"
              size={useSizeProp()}
            />

            <span className="ml-1">{ratingValue()}</span>
          </>
        )}

        {props.reviews ? (
          <>
            <VsfCounter className="ml-1" size={ratingSize()}>
              {props.reviews}
            </VsfCounter>
          </>
        ) : null}
      </div>
    </>
  );
}
