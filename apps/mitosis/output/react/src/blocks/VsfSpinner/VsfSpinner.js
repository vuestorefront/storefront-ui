import * as React from "react";
const VsfSpinnerTypes = Object.freeze({
  base: "base",
  linear: "linear"
});
const VsfSpinnerVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl"
});
const DEFAULT_VALUES = {
  type: VsfSpinnerTypes.base,
  variant: VsfSpinnerVariants.base
};
function VsfSpinner(props) {
  function useTypeProp() {
    var _a;
    return (_a = props.type) != null ? _a : DEFAULT_VALUES.type;
  }
  function useSizeProp() {
    var _a;
    return (_a = props.variant) != null ? _a : DEFAULT_VALUES.variant;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, useTypeProp() === VsfSpinnerTypes.base ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    role: "progressbar",
    className: `relative ${sizeClasses()}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sr-only",
    role: "alert"
  }, "loading"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: `absolute bg-transparent border-gray-200 rounded-full ${sizeClassesWithBorder()}`
  }), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base border-t-primary-600 ${sizeClassesWithBorder()}`
  }), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-1 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`
  }), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-2 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`
  }), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: `absolute bg-transparent rounded-[50%] is-animation-stopped animate-spin-base animation-delay-3 border-t-primary-600 border-x-transparent border-b-transparent ${sizeClassesWithBorder()}`
  }))) : /* @__PURE__ */ React.createElement("div", {
    className: "relative h-1 overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sr-only",
    role: "alert"
  }, "loading..."), /* @__PURE__ */ React.createElement("div", {
    className: "absolute w-full h-1 bg-gray-200",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute w-2.5 h-1 animate-linear-loader bg-primary-600",
    "aria-hidden": "true"
  })));
}
export {
  VsfSpinnerTypes,
  VsfSpinnerVariants,
  VsfSpinner as default
};
