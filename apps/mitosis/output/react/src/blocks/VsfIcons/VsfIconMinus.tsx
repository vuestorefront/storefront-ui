import * as React from "react";

export interface VsfIconMinusProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconMinus(props: VsfIconMinusProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "minus"}
      content={useContent()}
    />
  );
}
