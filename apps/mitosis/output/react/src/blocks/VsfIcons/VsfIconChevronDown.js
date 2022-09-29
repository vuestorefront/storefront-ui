import * as React from "react";

export interface VsfIconChevronDownProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconChevronDown(props: VsfIconChevronDownProps) {
  function useContent() {
    return (
      <>
        <path d="M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z" />
        <path d="M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "chevron-down"}
      content={useContent()}
    />
  );
}
