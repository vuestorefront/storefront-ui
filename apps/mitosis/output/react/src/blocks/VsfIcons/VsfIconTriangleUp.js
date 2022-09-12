import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconTriangleUp(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M11.069 9.35a1 1 0 0 1 1.518 0l3.826 4.463a1 1 0 0 1-.76 1.65H8.002a1 1 0 0 1-.76-1.65l3.827-4.464Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "triangle-up",
    content: useContent()
  });
}
export {
  VsfIconTriangleUp as default
};
