import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconCheckboxChecked(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "checkbox-checked",
    content: useContent()
  });
}
export {
  VsfIconCheckboxChecked as default
};
