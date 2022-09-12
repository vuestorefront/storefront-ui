import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconChevronUp(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M7.82 15.001a.997.997 0 0 1-1.41-1.411l4.588-4.588a1 1 0 0 1 1.414 0L17 13.59A.998.998 0 0 1 15.59 15l-3.885-3.876L7.82 15Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M7.82 15.001a.997.997 0 0 1-1.41-1.411l4.588-4.588a1 1 0 0 1 1.414 0L17 13.59A.998.998 0 0 1 15.59 15l-3.885-3.876L7.82 15Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "chevron-up",
    content: useContent()
  });
}
export {
  VsfIconChevronUp as default
};
