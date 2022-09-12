import * as React from "react";
import VsfIconClose from "../VsfIcons/VsfIconClose.js";
const VsfChipsInputVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg"
});
function VsfChipsInput(props) {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: `chip chip--primary transition duration-300 ease ${sizeClass()} ${disabledClass()}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: `chip__left-icon vsf-icon-${chipsSize()}`
  }, props.slotPrefix), props.label ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "chip__content text-gray-900"
  }, props.label)) : null, props.slotClose, !props.slotClose && !props.disabled ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "bg-transparent inline-flex chip__right-icon group",
    onClick: (event) => close(event)
  }, /* @__PURE__ */ React.createElement(VsfIconClose, {
    className: "transition-colors duration-300 ease text-gray-500 group-hover:text-primary-600 group-focus-within:text-primary-600 group-active:text-primary-700",
    size: closeSize(),
    ariaLabel: `Close ${props.label} chip`
  }))) : null));
}
export {
  VsfChipsInputVariants,
  VsfChipsInput as default
};
