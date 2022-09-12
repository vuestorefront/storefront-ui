import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
const VsfTooltipTypes = Object.freeze({
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right"
});
const DEFAULT_VALUES = {
  label: "",
  type: VsfTooltipTypes.top
};
function VsfTooltip(props) {
  function useLabelProp() {
    return props.label || DEFAULT_VALUES.label;
  }
  function useTypeProp() {
    return props.type || DEFAULT_VALUES.type;
  }
  function tooltipClass() {
    switch (useTypeProp()) {
      case VsfTooltipTypes.bottom:
        return "left-1/2 -translate-x-1/2 translate-y-2 top-full";
      case VsfTooltipTypes.left:
        return "-left-2 -translate-x-full -translate-y-1/2 top-1/2";
      case VsfTooltipTypes.right:
        return "left-full translate-x-2 -translate-y-1/2 top-1/2";
      default:
        return "left-1/2 -translate-x-1/2 -translate-y-full -top-2";
    }
  }
  function tooltipCaretClass() {
    switch (useTypeProp()) {
      case VsfTooltipTypes.bottom:
        return "after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-x-transparent after:border-t-transparent after:border-b-gray-500";
      case VsfTooltipTypes.left:
        return "after:top-1/2  after:left-[100%]   after:-translate-y-1/2 after:border-y-transparent after:border-r-transparent after:border-l-gray-500";
      case VsfTooltipTypes.right:
        return "after:top-1/2  after:right-[100%]  after:-translate-y-1/2 after:border-y-transparent after:border-l-transparent after:border-r-gray-500";
      default:
        return "after:left-1/2 after:top-[100%]    after:-translate-x-1/2 after:border-x-transparent after:border-b-transparent after:border-t-gray-500";
    }
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative inline-flex flex-col items-center group"
  }, props.children, /* @__PURE__ */ React.createElement("div", {
    role: "tooltip",
    className: classStringFromArray([
      "w-max max-w-[40ch] absolute hidden group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm text-justify leading-5 rounded-md px-3 py-1.5 shadow-sm",
      tooltipClass(),
      `after:content-[''] after:absolute after:border-4`,
      tooltipCaretClass()
    ])
  }, useLabelProp())));
}
export {
  VsfTooltipTypes,
  VsfTooltip as default
};
