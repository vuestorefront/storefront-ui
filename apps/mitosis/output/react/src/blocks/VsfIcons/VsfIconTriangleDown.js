import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconTriangleDown(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M11.24 15.114a1 1 0 0 0 1.52 0l3.825-4.463A1 1 0 0 0 15.825 9h-7.65a1 1 0 0 0-.76 1.65l3.826 4.464Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "triangle-down",
    content: useContent()
  });
}
export {
  VsfIconTriangleDown as default
};
