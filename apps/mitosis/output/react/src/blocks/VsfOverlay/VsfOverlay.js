import * as React from "react";
const DEFAULT_VALUES = {};
function VsfOverlay(props) {
  function positionClass() {
    return props.absolute ? "absolute" : "fixed";
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props.visible ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    onClick: (e) => props.onClick(e),
    className: `w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-50 ${positionClass()}`
  })) : null);
}
export {
  VsfOverlay as default
};
