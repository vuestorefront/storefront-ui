import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconInfo from "../VsfIcons/VsfIconInfo.js";
import VsfIconClose from "../VsfIcons/VsfIconClose.js";
const VsfAlertTypes = Object.freeze({
  info: "info",
  positive: "positive",
  warning: "warning",
  error: "error"
});
const DEFAULT_VALUES = {
  type: VsfAlertTypes.info,
  persistent: false
};
function VsfAlert(props) {
  function useTypeProp() {
    var _a;
    return (_a = props.type) != null ? _a : DEFAULT_VALUES.type;
  }
  function usePersistentProp() {
    var _a;
    return (_a = props.persistent) != null ? _a : DEFAULT_VALUES.persistent;
  }
  function typeClasses() {
    return classStringFromArray([
      props.type === VsfAlertTypes.positive && "bg-primary-100 border-primary-400",
      props.type === VsfAlertTypes.warning && "bg-warning-100 border-warning-500",
      props.type === VsfAlertTypes.error && "bg-negative-100 border-negative-400",
      props.type === VsfAlertTypes.info && "bg-secondary-100 border-secondary-400"
    ]);
  }
  function iconClasses() {
    return classStringFromArray([
      props.type === VsfAlertTypes.positive && "text-primary-600",
      props.type === VsfAlertTypes.warning && "text-warning-700",
      props.type === VsfAlertTypes.error && "text-negative-700",
      props.type === VsfAlertTypes.info && "text-secondary-800"
    ]);
  }
  function close() {
    props.handleCloseClick && props.handleCloseClick();
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    role: "alert",
    className: `flex flex-wrap justify-between min-h-[3.5rem] pl-4 pr-4 pt-3.5 pb-3.5 rounded-md shadow-medium border ${typeClasses()}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, !props.slotIcon ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconInfo, {
    className: iconClasses()
  })) : /* @__PURE__ */ React.createElement("div", null, props.slotIcon), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col flex-shrink text-gray-900 font-body"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-lg font-medium"
  }, props.header), /* @__PURE__ */ React.createElement("span", {
    className: "text-base font-normal leading-6"
  }, props.description))), !props.slotButton ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: usePersistentProp() && "hidden",
    onClick: (event) => close()
  }, /* @__PURE__ */ React.createElement(VsfIconClose, {
    "aria-hidden": "true",
    className: iconClasses()
  }))) : /* @__PURE__ */ React.createElement("div", {
    className: "button"
  }, props.slotButton)));
}
export {
  VsfAlertTypes,
  VsfAlert as default
};
