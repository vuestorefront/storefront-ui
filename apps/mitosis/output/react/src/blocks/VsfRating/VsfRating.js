import * as React from "react";
import VsfIconStar from "../VsfIcons/VsfIconStar.js";
import VsfIconStarOutline from "../VsfIcons/VsfIconStarOutline.js";
import VsfIconStarPartiallyFilled from "../VsfIcons/VsfIconStarPartiallyFilled.js";
import VsfCounter from "../VsfCounter/VsfCounter.js";
const VsfRatingVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl"
});
const VsfRatingTypes = Object.freeze({
  base: "base",
  withValue: "withValue"
});
const DEFAULT_VALUES = {
  value: 0,
  max: 5,
  size: VsfRatingVariants.base,
  type: VsfRatingTypes.base
};
function VsfRating(props) {
  var _a, _b;
  function useValueProp() {
    return Math.max(0, Math.min(Number(props.value) || DEFAULT_VALUES.value, useMaxProp()));
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
      xl: "2xl"
    }[useSizeProp()];
  }
  function textClass() {
    return {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-lg",
      "2xl": "text-lg"
    }[useSizeProp()];
  }
  function isBaseType() {
    return useTypeProp() === VsfRatingTypes.base;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    role: "img",
    className: `flex items-center h-6 font-normal pointer-events-none font-body ${textClass()}`,
    "aria-label": `Rating: ${useValueProp()} out of ${useMaxProp()} stars`
  }, isBaseType() ? /* @__PURE__ */ React.createElement(React.Fragment, null, (_a = [...Array(filled())]) == null ? void 0 : _a.map((_, index) => /* @__PURE__ */ React.createElement(VsfIconStar, {
    "aria-hidden": "true",
    className: "text-warning-500",
    key: index,
    size: useSizeProp()
  })), isPartiallyFilled() ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconStarPartiallyFilled, {
    "aria-hidden": "true",
    className: "text-warning-500",
    size: useSizeProp()
  })) : null, (_b = [...Array(empty())]) == null ? void 0 : _b.map((_, index) => /* @__PURE__ */ React.createElement(VsfIconStarOutline, {
    "aria-hidden": "true",
    className: "text-gray-500 opacity-50",
    key: index,
    size: useSizeProp()
  }))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconStar, {
    "aria-hidden": "true",
    className: "text-warning-500",
    size: useSizeProp()
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-1"
  }, ratingValue())), props.reviews ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfCounter, {
    className: "ml-1",
    size: ratingSize()
  }, props.reviews)) : null));
}
export {
  VsfRatingTypes,
  VsfRatingVariants,
  VsfRating as default
};
