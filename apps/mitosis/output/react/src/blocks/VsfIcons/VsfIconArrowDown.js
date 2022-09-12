import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconArrowDown(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "arrow-down",
    content: useContent()
  });
}
export {
  VsfIconArrowDown as default
};
