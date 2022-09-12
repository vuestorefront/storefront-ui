import * as React from "react";
function VsfSheet(props) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute bg-white rounded-md empty:h-24 shadow-medium w-80"
  }, props.children));
}
export {
  VsfSheet as default
};
