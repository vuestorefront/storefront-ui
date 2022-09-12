import * as React from "react";

export interface VsfIconArrowLeftProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconArrowLeft(props: VsfIconArrowLeftProps) {
  function useContent() {
    return (
      <>
        <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
        <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "arrow-left"}
      content={useContent()}
    />
  );
}
