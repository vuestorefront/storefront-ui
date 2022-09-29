import * as React from "react";

export interface VsfIconTriangleLeftProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconTriangleLeft(props: VsfIconTriangleLeftProps) {
  function useContent() {
    return (
      <>
        <path d="M8.359 11.059a1 1 0 0 0 0 1.518l4.463 3.826a1 1 0 0 0 1.651-.76v-7.65a1 1 0 0 0-1.65-.76L8.358 11.06Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "triangle-left"}
      content={useContent()}
    />
  );
}
