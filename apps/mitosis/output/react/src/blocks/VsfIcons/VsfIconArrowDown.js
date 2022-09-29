import * as React from "react";

export interface VsfIconArrowDownProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconArrowDown(props: VsfIconArrowDownProps) {
  function useContent() {
    return (
      <>
        <path d="M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z" />
        <path d="M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "arrow-down"}
      content={useContent()}
    />
  );
}
