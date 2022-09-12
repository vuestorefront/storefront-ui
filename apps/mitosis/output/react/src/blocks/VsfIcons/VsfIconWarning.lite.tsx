import * as React from "react";

export interface VsfIconWarningProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconWarning(props: VsfIconWarningProps) {
  function useContent() {
    return (
      <>
        <path d="M12.002 9a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Zm1.304 7.415a1.306 1.306 0 1 1-2.612 0 1.306 1.306 0 0 1 2.612 0Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.258 4.067c.764-1.363 2.725-1.363 3.49 0l7.818 13.95c.748 1.333-.216 2.978-1.744 2.978H4.183c-1.528 0-2.492-1.645-1.745-2.978l7.82-13.95Zm9.137 14.928a.25.25 0 0 0 .218-.372L12.22 5.434a.25.25 0 0 0-.436 0L4.392 18.623a.25.25 0 0 0 .218.372h14.785Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "warning"}
      content={useContent()}
    />
  );
}
