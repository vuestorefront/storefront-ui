import * as React from "react";

export interface VsfIconArrowUpProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconArrowUp(props: VsfIconArrowUpProps) {
  function useContent() {
    return (
      <>
        <path d="M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z" />
        <path d="M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "arrow-up"}
      content={useContent()}
    />
  );
}
