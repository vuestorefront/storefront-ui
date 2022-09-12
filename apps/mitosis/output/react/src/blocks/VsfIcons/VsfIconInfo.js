import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconInfo(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M12 17a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Zm0-7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
    }), /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 17a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Zm0-7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
    }), /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "info",
    content: useContent()
  });
}
export {
  VsfIconInfo as default
};
