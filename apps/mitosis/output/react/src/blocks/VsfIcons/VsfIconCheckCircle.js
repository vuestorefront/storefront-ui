import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconCheckCircle(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "check-circle",
    content: useContent()
  });
}
export {
  VsfIconCheckCircle as default
};
