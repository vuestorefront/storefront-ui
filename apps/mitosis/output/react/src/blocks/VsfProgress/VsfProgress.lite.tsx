import * as React from "react";

type VsfProgressVariantsKeys = keyof typeof VsfProgressVariants;
type VsfProgressTypesKeys = keyof typeof VsfProgressTypes;
export interface VsfProgressProps {
  value?: number;
  label?: string;
  variant?: VsfProgressVariantsKeys;
  type?: VsfProgressTypesKeys;
}

import { validator } from "../../functions/propUtils";
export const VsfProgressVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
});
export const VsfProgressTypes = Object.freeze({
  circle: "circle",
  linear: "linear",
});
const svgSizes = {
  sm: {
    icon: 20,
    r: 9.165,
    dash: 57.556,
  },
  base: {
    icon: 24,
    r: 11,
    dash: 69.08,
  },
  lg: {
    icon: 40,
    r: 18.33,
    dash: 115.112,
  },
  xl: {
    icon: 56,
    r: 25.66,
    dash: 161.144,
  },
  "2xl": {
    icon: 96,
    r: 44,
    dash: 276.32,
  },
  "3xl": {
    icon: 192,
    r: 88,
    dash: 552.64,
  },
};
const DEFAULT_VALUES: Required<VsfProgressProps> = {
  value: 0,
  label: "Loading",
  variant: VsfProgressVariants.base,
  type: VsfProgressTypes.circle,
};

export default function VsfProgress(props: VsfProgressProps) {
  function defaults() {
    return DEFAULT_VALUES;
  }

  function useVariant() {
    return validator(
      Object.keys(VsfProgressVariants),
      props.variant,
      defaults().variant
    );
  }

  function useType() {
    return validator(
      Object.keys(VsfProgressTypes),
      props.type,
      defaults().type
    );
  }

  function useValue() {
    return props.value || defaults().value;
  }

  function useLabel() {
    return props.label || defaults().label;
  }

  function showText() {
    return (
      useVariant() !== VsfProgressVariants.sm &&
      useVariant() !== VsfProgressVariants.base
    );
  }

  function strokeWidth() {
    switch (useVariant()) {
      case VsfProgressVariants.xl:
        return 3;

      case VsfProgressVariants["2xl"]:
        return 4;

      case VsfProgressVariants["3xl"]:
        return 8;

      default:
        return 2;
    }
  }

  return (
    <>
      {useType() === VsfProgressTypes.circle ? (
        <>
          <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={useValue()}
            aria-label={useLabel()}
          >
            <svg
              role="img"
              width={svgSizes[useVariant()].icon}
              height={svgSizes[useVariant()].icon}
              stroke-width={strokeWidth()}
              className={showText() ? "" : "-rotate-90"}
              viewPort={`0 0 ${svgSizes[useVariant()].icon} ${
                svgSizes[useVariant()].icon
              }`}
            >
              <circle
                stroke="#e6e6e6"
                fill="none"
                r={svgSizes[useVariant()].r}
                cx={svgSizes[useVariant()].icon / 2}
                cy={svgSizes[useVariant()].icon / 2}
                stroke-dasharray={`${svgSizes[useVariant()].dash} ${
                  svgSizes[useVariant()].dash
                }`}
                className={showText() ? "origin-center rotate-[-90deg]" : ""}
              />

              <circle
                stroke="#16A34A"
                fill="none"
                r={svgSizes[useVariant()].r}
                cx={svgSizes[useVariant()].icon / 2}
                cy={svgSizes[useVariant()].icon / 2}
                stroke-dasharray={`${
                  svgSizes[useVariant()].dash *
                  ((props.value || DEFAULT_VALUES.value) / 100)
                }, ${svgSizes[useVariant()].dash}`}
                className={`transition-all ease-in-out duration-[600ms] ${
                  showText() ? "origin-center rotate-[-90deg]" : ""
                }`}
              />

              {showText() ? (
                <>
                  <text
                    text-anchor="middle"
                    alignment-baseline="central"
                    x="50%"
                    y="50%"
                    className={`font-medium stroke-0 fill-gray-900 font-body stroke-black
              ${
                useVariant() === VsfProgressVariants.lg ||
                useVariant() === VsfProgressVariants.xl
                  ? "text-xs "
                  : ""
              }
              ${useVariant() === VsfProgressVariants["3xl"] ? "text-2xl" : ""}
            `}
                  >
                    {useValue()}%
                  </text>
                </>
              ) : null}
            </svg>
          </div>
        </>
      ) : (
        <label className="flex">
          <progress
            id="progressbar"
            max="100"
            className="progress-linear"
            value={useValue()}
          />

          <span className="text-xs ml-1 font-medium font-body">
            {useValue()}%
          </span>
        </label>
      )}
    </>
  );
}
