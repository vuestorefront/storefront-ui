import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
const DEFAULT_VALUES = {
  value: "",
  label: "",
  helpText: "",
  errorText: ""
};
function VsfCheckbox(props) {
  function useValueProp() {
    return props.value || DEFAULT_VALUES.value;
  }
  function useLabelProp() {
    return props.label || DEFAULT_VALUES.label;
  }
  function useHelpTextProp() {
    return props.helpText || DEFAULT_VALUES.helpText;
  }
  function useErrorTextProp() {
    return props.errorText || DEFAULT_VALUES.errorText;
  }
  function rightCheckboxClasses() {
    return props.rightCheckbox ? "grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_24px_!important]" : "";
  }
  function inputClasses() {
    return classStringFromArray([
      "peer flex self-center w-[18px] h-[18px] border-2 border-gray-500 rounded-sm appearance-none cursor-pointer",
      "hover:border-primary-500 checked:bg-checked-checkbox checked:border-primary-500 disabled:border-gray-500/50",
      "disabled:cursor-not-allowed outline-violet",
      props.indeterminate ? "bg-indeterminate-checkbox border-primary-500 " : "",
      props.invalid ? "!border-negative-600" : "",
      props.indeterminate && props.disabled ? "!border-[#b8b8bc] bg-indeterminate-disabled-checkbox " : "",
      props.rightCheckbox ? "col-start-[end-col] row-start-[start-row] " : ""
    ]);
  }
  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }
  function isChecked() {
    return props.checked;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `sfui-checkbox relative grid max-w-xs grid-cols-[24px_1fr] gap-x-2.5 right-checkbox ${rightCheckboxClasses()}`
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: isChecked(),
    id: `checkbox-${props.name}`,
    indeterminate: props.indeterminate,
    name: props.name,
    required: props.required,
    disabled: props.disabled,
    invalid: props.invalid,
    className: inputClasses(),
    onChange: (e) => onChangeHandler(e),
    value: useValueProp()
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: `checkbox-${props.name}`,
    className: classStringFromArray([
      `text-gray-900 flex self-center cursor-pointer font-body peer-required:after:content-['*'] peer-disabled:text-gray-900/40 peer-disabled:cursor-not-allowed`,
      props.rightCheckbox ? "!col-start-[start-col] row-start-[start-row] col-end-[end-col]" : ""
    ])
  }, useLabelProp()), /* @__PURE__ */ React.createElement("span", {
    className: classStringFromArray([
      `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body`,
      !props.invalid ? "hidden" : "",
      props.rightCheckbox ? "!col-start-[start-col] col-end-[end-col]" : ""
    ])
  }, useErrorTextProp()), /* @__PURE__ */ React.createElement("span", {
    className: classStringFromArray([
      `col-start-2 mt-0.5 text-xs text-gray-500 peer-disabled:text-gray-500/50 font-body`,
      props.rightCheckbox ? "!col-start-[start-col]" : ""
    ])
  }, useHelpTextProp()), /* @__PURE__ */ React.createElement("span", {
    className: classStringFromArray([
      `hidden col-start-1 mt-4 text-xs text-gray-500 peer-required:block peer-disabled:opacity-50 font-body`,
      props.rightCheckbox ? "!col-start-[start-col] col-end-[end-col]" : ""
    ])
  }, "*Required"));
}
export {
  VsfCheckbox as default
};
