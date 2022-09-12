import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconChevronDown(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "chevron-down",
    content: useContent()
  });
}
export {
  VsfIconChevronDown as default
};
