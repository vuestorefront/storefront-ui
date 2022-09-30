import * as React from "react";

export interface VsfIconLocationOutlineProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconLocationOutline(
  props: VsfIconLocationOutlineProps
) {
  function useContent() {
    return (
      <>
        <path d="M10 10c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 10.2c0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2s-8 3.22-8 8.2Zm2 0C6 6.386 8.842 4 12 4s6 2.386 6 6.2c0 1.073-.416 2.424-1.51 4.097-.986 1.51-2.465 3.191-4.486 5.042-2.025-1.851-3.506-3.532-4.494-5.042C6.416 12.623 6 11.273 6 10.2Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "location-outline"}
      content={useContent()}
    />
  );
}
