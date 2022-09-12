import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconChevronUpDown(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.41 8.291c.39.39 1.02.39 1.41 0l3.885-3.875 3.885 3.876A.998.998 0 0 0 17 6.88l-4.588-4.587a1 1 0 0 0-1.414 0L6.41 6.88a.998.998 0 0 0 0 1.411ZM17 15.71a.998.998 0 0 0-1.41 0l-3.885 3.875-3.884-3.876a.998.998 0 0 0-1.41 1.412l4.587 4.587a1 1 0 0 0 1.414 0L17 17.12a.998.998 0 0 0 0-1.411Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "chevron-up-down",
    content: useContent()
  });
}
export {
  VsfIconChevronUpDown as default
};
