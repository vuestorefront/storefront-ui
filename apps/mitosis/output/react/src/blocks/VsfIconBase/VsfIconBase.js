import * as React from "react";
const VsfIconSize = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl"
});
const DEFAULT_VALUES = {
  content: "",
  size: VsfIconSize.base
};
function VsfIconBase(props) {
  function useSize() {
    return props.size || DEFAULT_VALUES.size;
  }
  function useContentVue() {
  }
  function useContentReact() {
    const reactElement = props.content;
    if (reactElement.length && reactElement[0].type === "svg") {
      return reactElement[0].props.children;
    } else if (!Array.isArray(reactElement)) {
      return reactElement.props.children;
    } else {
      return DEFAULT_VALUES.content;
    }
  }
  function viewBoxFromSvg() {
    var _a, _b, _c;
    const reactElement = props.content;
    return ((_a = reactElement == null ? void 0 : reactElement[0]) == null ? void 0 : _a.type) === "svg" ? (_c = (_b = reactElement == null ? void 0 : reactElement[0]) == null ? void 0 : _b.props) == null ? void 0 : _c.viewbox : void 0;
  }
  return /* @__PURE__ */ React.createElement("svg", {
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    "v-html": "useContentVue",
    viewBox: viewBoxFromSvg() || props.viewBox,
    "aria-label": props.ariaLabel,
    className: `vsf-icon vsf-icon-${useSize()} ${props.className || ""}`
  }, useContentReact());
}
export {
  VsfIconSize,
  VsfIconBase as default
};
