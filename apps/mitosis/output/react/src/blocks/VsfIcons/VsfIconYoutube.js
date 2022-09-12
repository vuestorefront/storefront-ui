import * as React from "react";
import VsfIconBase from "../VsfIconBase/VsfIconBase.js";
const DEFAULT_VALUES = {
  size: "base"
};
function VsfIconYoutube(props) {
  function useContent() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
      d: "M22.54 6.42a2.764 2.764 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.764 2.764 0 0 0 1.46 6.42C1 8.147 1 11.75 1 11.75s0 3.603.46 5.33a2.723 2.723 0 0 0 1.945 1.926c1.715.463 8.595.463 8.595.463s6.88 0 8.595-.463a2.723 2.723 0 0 0 1.945-1.926c.46-1.727.46-5.33.46-5.33s0-3.603-.46-5.33ZM9.75 15.021V8.48l5.75 3.271-5.75 3.271Z"
    }));
  }
  return /* @__PURE__ */ React.createElement(VsfIconBase, {
    viewBox: "0 0 24 24",
    className: props.className || "",
    size: props.size || DEFAULT_VALUES.size,
    ariaLabel: props.ariaLabel || "youtube",
    content: useContent()
  });
}
export {
  VsfIconYoutube as default
};
