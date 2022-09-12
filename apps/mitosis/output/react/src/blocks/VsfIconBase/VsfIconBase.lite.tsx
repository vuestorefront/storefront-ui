import * as React from "react";

type VsfIconSizeKeys = keyof typeof VsfIconSize; // TODO: write separate overwrite components when possible (bug react component create es6 bundle with import, not copying file)
// TODO: think later about if maybe better would be to require user to strip svg element and pass only paths
// TODO: write separate overwrite components when possible (bug react component create es6 bundle with import, not copying file)
// TODO: think later about if maybe better would be to require user to strip svg element and pass only paths
export interface VsfIconBaseProps {
  content: React.ReactElement[] | React.ReactElement | string;
  size?: VsfIconSizeKeys;
  viewBox: string;
  className?: string;
  ariaLabel?: string;
}

export const VsfIconSize = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
});
const DEFAULT_VALUES = {
  content: "",
  size: VsfIconSize.base,
};

export default function VsfIconBase(props: VsfIconBaseProps) {
  function useSize() {
    return props.size || DEFAULT_VALUES.size;
  }

  function useContentVue() {}

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
    const reactElement = props.content;
    return reactElement?.[0]?.type === "svg"
      ? reactElement?.[0]?.props?.viewbox
      : void 0;
  }

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      v-html="useContentVue"
      viewBox={viewBoxFromSvg() || props.viewBox}
      aria-label={props.ariaLabel}
      className={`vsf-icon vsf-icon-${useSize()} ${props.className || ""}`}
    >
      {useContentReact()}
    </svg>
  );
}
