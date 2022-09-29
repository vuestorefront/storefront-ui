import * as React from "react";

export interface VsfIconArrowRightProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconArrowRight(props: VsfIconArrowRightProps) {
  function useContent() {
    return (
      <>
        <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
        <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "arrow-right"}
      content={useContent()}
    />
  );
}
