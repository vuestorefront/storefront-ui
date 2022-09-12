import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconMinus(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
    }), /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "minus",
    content: useContent()
  });
}
export {
  VsfIconMinus as default
};
