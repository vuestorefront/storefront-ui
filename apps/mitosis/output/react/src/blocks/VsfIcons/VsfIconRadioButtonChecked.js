import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconRadioButtonChecked(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M6 12c0-3.312 2.688-6 6-6s6 2.688 6 6-2.688 6-6 6-6-2.688-6-6Z"
    }), /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM4 12c0-4.415 3.585-8 8-8s8 3.585 8 8-3.585 8-8 8-8-3.585-8-8Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "radio-button-checked",
    content: useContent()
  });
}
export {
  VsfIconRadioButtonChecked as default
};
