import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconCancel from "../VsfIcons/VsfIconCancel.js";
import VsfButton from "../VsfButton/VsfButton.js";
const DEFAULT_VALUES = {
  name: "search"
};
function VsfSearch(props) {
  function useNameProp() {
    return props.name || DEFAULT_VALUES.name;
  }
  function clear(event) {
    event == null ? void 0 : event.preventDefault();
    props.onClear && props.onClear(event);
  }
  function useValueProp() {
    return props.value;
  }
  function onInputHandler(event) {
    event.stopPropagation();
    props.onInput && props.onInput(event);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("form", {
    role: "search",
    "aria-disabled": props.disabled ? "true" : "false",
    className: classStringFromArray([
      "flex",
      props.disabled ? "cursor-not-allowed" : ""
    ]),
    onSubmit: (e) => {
      var _a;
      return (_a = props.onSubmit) == null ? void 0 : _a.call(props, e);
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: classStringFromArray([
      "group",
      "relative flex-1 flex items-center pl-4 py-2 pr-2",
      "ring-1 ring-gray-200 ring-inset",
      "rounded-l-md",
      "only:rounded-r-md text-gray-500",
      props.disabled ? "bg-gray-100/50 ring-opacity-50 text-opacity-20" : "bg-white hover:ring-primary-500 focus-within:caret-primary-500 active:caret-primary-500 active:ring-primary-500 active:ring-2 focus-within:ring-primary-500 focus-within:ring-2"
    ])
  }, props.slotPrefix ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 inline-flex"
  }, props.slotPrefix)) : null, /* @__PURE__ */ React.createElement("input", {
    role: "searchbox",
    type: "search",
    name: useNameProp(),
    placeholder: props.placeholder,
    disabled: props.disabled,
    value: useValueProp(),
    onInput: (e) => onInputHandler(e),
    required: props.required,
    autocomplete: props.autocomplete,
    className: classStringFromArray([
      "peer outline-none bg-transparent text-gray-900 appearance-none placeholder:text-gray-500 font-body text-base block w-full ",
      "disabled:placeholder:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed"
    ])
  }), /* @__PURE__ */ React.createElement("span", {
    className: "peer-placeholder-shown:hidden inline-block ml-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "reset",
    className: "disabled:cursor-not-allowed flex items-center justify-center rounded-full",
    onClick: (e) => clear(e),
    disabled: props.disabled
  }, /* @__PURE__ */ React.createElement(VsfIconCancel, null))), props.slotSuffix ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 inline-flex"
  }, props.slotSuffix)) : null), props.slotSubmit || props.submitText ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfButton, {
    type: "submit",
    className: "rounded-r-md",
    disabled: props.disabled,
    tile: true,
    icon: !props.submitText
  }, props.slotSubmit, props.submitText)) : null), /* @__PURE__ */ React.createElement("div", {
    className: "w-full relative"
  }, props.slotResults));
}
export {
  VsfSearch as default
};
