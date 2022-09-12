import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconChevronLeft(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M14.707 8.115a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.587a.997.997 0 0 0 1.412-1.41L10.83 12l3.877-3.885Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.707 8.115a.998.998 0 0 0-1.412-1.41l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.587a.997.997 0 0 0 1.412-1.41L10.83 12l3.877-3.885Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "chevron-left",
    content: useContent()
  });
}
export {
  VsfIconChevronLeft as default
};
