import * as React from "react";

export interface VsfIconTriangleUpProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconTriangleUp(props: VsfIconTriangleUpProps) {
  function useContent() {
    return (
      <>
        <path d="M11.069 9.35a1 1 0 0 1 1.518 0l3.826 4.463a1 1 0 0 1-.76 1.65H8.002a1 1 0 0 1-.76-1.65l3.827-4.464Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "triangle-up"}
      content={useContent()}
    />
  );
}
