import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconTriangleRight(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M14.124 10.886a1 1 0 0 1 0 1.519L9.661 16.23a1 1 0 0 1-1.651-.76V7.82a1 1 0 0 1 1.65-.76l4.464 3.826Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "triangle-right",
    content: useContent()
  });
}
export {
  VsfIconTriangleRight as default
};
