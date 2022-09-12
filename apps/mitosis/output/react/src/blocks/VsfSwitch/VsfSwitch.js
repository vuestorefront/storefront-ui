import * as React from "react";
import { classStringFromArray } from "../../functions/domUtils";
const VsfSwitchVariants = Object.freeze({
  sm: "sm",
  base: "base"
});
const DEFAULT_VALUES = {
  value: "",
  label: "",
  helpText: "",
  errorText: "",
  size: VsfSwitchVariants.base
};
function VsfSwtich(props) {
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
  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }
  function rightCheckboxClasses() {
    return props.rightCheckbox ? "grid-rows-[[start-row]_1fr_[end-row]_1fr] grid-cols-[[start-col]_1fr_[end-col]_36px_!important]" : "";
  }
  function inputClasses() {
    return classStringFromArray([
      `after:content['']`,
      "peer flex self-center disabled:cursor-not-allowed outline-violet rounded-full appearance-none cursor-pointer relative",
      "border-gray-500 bg-white",
      "after:bg-gray-500 after:absolute after:top-1/2 after:left-1/4 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:transition-transform",
      "active:checked:!bg-primary-700 active:checked:border-transparent",
      "checked:border-primary-500 checked:bg-primary-500 checked:after:!bg-white checked:after:translate-x-3/4",
      "hover:checked:after:bg-white hover:checked:border-primary-600 hover:checked:!bg-primary-600",
      "disabled:!border-gray-500/50 disabled:checked:!border-transparent disabled:checked:!bg-gray-500/50 disabled:checked:after:!bg-white disabled:after:!bg-gray-500/50",
      props.invalid ? "border-negative-600 after:bg-negative-600 active:border-negative-700 active:after:bg-negative-700" : "hover:border-primary-600 hover:after:bg-primary-600 active:after:bg-primary-700 active:border-primary-700",
      props.rightCheckbox ? "col-start-[end-col] row-start-[start-row] " : ""
    ]);
  }
  function sizeClass() {
    return useSizeProp() === VsfSwitchVariants.base ? "w-[36px] h-[20px] border-2 after:w-[13px] after:h-[13px]" : "w-[30px] h-[17px] border-[1.5px] after:w-[11px] after:h-[11px]";
  }
  function onChangeHandler(event) {
    props.onChange && props.onChange(event);
  }
  function isChecked() {
    return props.checked;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: `relative grid max-w-xs grid-cols-[36px_1fr] gap-x-2.5 right-checkbox ${rightCheckboxClasses()}`
  }, /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: isChecked(),
    id: `checkbox-${props.name}`,
    name: props.name,
    required: props.required,
    disabled: props.disabled,
    invalid: props.invalid,
    className: classStringFromArray([inputClasses(), sizeClass()]),
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
      `block col-start-2 mt-0.5 text-sm font-medium text-negative-600 font-body peer-disabled:text-gray-500/50`,
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
  VsfSwitchVariants,
  VsfSwtich as default
};
