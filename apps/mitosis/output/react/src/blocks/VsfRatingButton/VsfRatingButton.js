import * as React from "react";
const VsfRatingButtonVariants = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl"
});
const DEFAULT_VALUES = {
  max: 5,
  size: VsfRatingButtonVariants.base
};
function VsfRatingButton(props) {
  var _a;
  function useMaxProp() {
    return Number(props.max) || DEFAULT_VALUES.max;
  }
  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }
  function sizeClass() {
    return {
      xs: "h-4 w-4",
      sm: "h-5 w-5",
      base: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
      "2xl": "h-20 w-20"
    }[useSizeProp()];
  }
  function onChangeHandler(item) {
    props.onChange && props.onChange(item);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", {
    className: "inline-flex rounded-md rating focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400"
  }, (_a = [...Array(useMaxProp()).keys()].map((i) => i + 1)) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "rating-1",
    key: `star-${item}+${index}`,
    "aria-label": `Rating star ${item} of ${useMaxProp()}`,
    value: item,
    className: `appearance-none cursor-pointer star-input ${sizeClass()}`,
    onChange: (event) => onChangeHandler(item),
    disabled: props.disabled,
    defaultChecked: props.modelValue === item
  }))));
}
export {
  VsfRatingButtonVariants,
  VsfRatingButton as default
};
