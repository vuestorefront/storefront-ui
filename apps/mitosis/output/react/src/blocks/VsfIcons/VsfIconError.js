import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconError(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm1-14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V8Zm-2.25 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
    }), /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm1-14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V8Zm-2.25 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "error",
    content: useContent()
  });
}
export {
  VsfIconError as default
};
