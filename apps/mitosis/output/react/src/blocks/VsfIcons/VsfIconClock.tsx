import * as React from "react";

export interface VsfIconClockProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconClock(props: VsfIconClockProps) {
  function useContent() {
    return (
      <>
        <path d="M11 7.75a.75.75 0 0 1 1.5 0v4.5l3.875 2.299a.718.718 0 1 1-.737 1.234L11 13V7.75Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12Zm2 0c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "clock"}
      content={useContent()}
    />
  );
}
