import * as React from "react";
const VsfCounterVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl"
});
function VsfCounter(props) {
  function fontSizeClass() {
    switch (props.size) {
      case VsfCounterVariants.xs:
        return "text-3xs";
      case VsfCounterVariants.sm:
        return "text-2xs";
      case VsfCounterVariants.lg:
        return "text-sm";
      case VsfCounterVariants.xl:
        return "text-base";
      case VsfCounterVariants["2xl"]:
        return "text-lg";
      default:
        return "text-xs";
    }
  }
  function pillSpacingClass() {
    if (!props.pill)
      return "";
    switch (props.size) {
      case VsfCounterVariants.xs:
      case VsfCounterVariants.sm:
        return "px-1";
      case VsfCounterVariants.lg:
        return "px-2.5";
      case VsfCounterVariants.xl:
      case VsfCounterVariants["2xl"]:
        return "px-3";
      default:
        return "px-2";
    }
  }
  function fontWeightClass() {
    if (props.pill)
      return "font-medium";
    switch (props.size) {
      case VsfCounterVariants.xs:
      case VsfCounterVariants.sm:
        return "font-medium";
      default:
        return "font-normal";
    }
  }
  function pillClass() {
    return props.pill ? "py-0.5 ring-1 ring-gray-200 ring-inset rounded-full text-gray-900" : `before:content-['('] after:content-[')'] text-gray-500`;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `inline-flex relative items-center font-body ${fontSizeClass()} ${pillClass()} ${pillSpacingClass()} ${fontWeightClass()} ${props.className || ""}`
  }, props.children);
}
export {
  VsfCounterVariants,
  VsfCounter as default
};
