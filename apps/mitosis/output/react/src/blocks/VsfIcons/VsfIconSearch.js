import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconSearch(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M10.3 18.5c-3.2 0-6.3-1.9-7.6-5-.9-2-.9-4.3-.1-6.3C3.4 5.1 5 3.5 7 2.7c2-.9 4.3-.9 6.3-.1C15.4 3.4 17 5 17.8 7c1.8 4.2-.2 9-4.4 10.8-1 .5-2.1.7-3.1.7Zm0-14.5c-.9 0-1.7.2-2.5.5-3.2 1.3-4.7 5-3.3 8.2 1.3 3.2 5 4.7 8.2 3.3 3.2-1.3 4.7-5 3.3-8.2-.7-1.5-1.9-2.7-3.4-3.4-.8-.2-1.6-.4-2.3-.4Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M21 22c-.3 0-.5-.1-.7-.3l-5.6-5.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M10.3 18.5c-3.2 0-6.3-1.9-7.6-5-.9-2-.9-4.3-.1-6.3C3.4 5.1 5 3.5 7 2.7c2-.9 4.3-.9 6.3-.1C15.4 3.4 17 5 17.8 7c1.8 4.2-.2 9-4.4 10.8-1 .5-2.1.7-3.1.7Zm0-14.5c-.9 0-1.7.2-2.5.5-3.2 1.3-4.7 5-3.3 8.2 1.3 3.2 5 4.7 8.2 3.3 3.2-1.3 4.7-5 3.3-8.2-.7-1.5-1.9-2.7-3.4-3.4-.8-.2-1.6-.4-2.3-.4Z"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M21 22c-.3 0-.5-.1-.7-.3l-5.6-5.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "search",
    content: useContent()
  });
}
export {
  VsfIconSearch as default
};
