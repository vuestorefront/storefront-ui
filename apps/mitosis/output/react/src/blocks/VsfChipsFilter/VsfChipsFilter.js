import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
const VsfChipsFilterVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg"
});
function VsfChipsFilter(props) {
  function useTypeProp() {
    return props.type === "radio" ? "radio" : "checkbox";
  }
  function sizeClass() {
    switch (props.size) {
      case VsfChipsFilterVariants.sm:
        return "size--sm";
      case VsfChipsFilterVariants.lg:
        return "size--lg";
      default:
        return "size--base";
    }
  }
  function chipClass() {
    return classStringFromArray([
      "chips-filter__wrapper chip transition duration-300 ease",
      "peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500",
      "peer-hover:bg-primary-100 peer-active:bg-primary-200",
      "peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50",
      "outline-offset-2 outline-violet-400 peer-focus:outline",
      props.disabled ? "chip--disabled" : "",
      sizeClass()
    ]);
  }
  function thumbClass() {
    return classStringFromArray([
      "chips-filter__thumb chip__left-icon",
      "rounded-full flex opacity-50",
      props.size === VsfChipsFilterVariants.sm ? "h-5 w-5" : "h-6 w-6"
    ]);
  }
  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", {
    className: "chips-filter inline-flex rounded-full relative"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "peer appearance-none outline-none absolute",
    type: useTypeProp(),
    disabled: props.disabled,
    onChange: (e) => onChangeHandler(e),
    value: props.value
  }), /* @__PURE__ */ React.createElement("div", {
    className: chipClass()
  }, props.slotThumb ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: thumbClass()
  }, props.slotThumb)) : null, props.label ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "chips-filter__label chip__content font-normal text-gray-900"
  }, props.label)) : null)));
}
export {
  VsfChipsFilterVariants,
  VsfChipsFilter as default
};
