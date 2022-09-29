import * as React from "react";

export interface VsfIconMoreVerticalProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconMoreVertical(props: VsfIconMoreVerticalProps) {
  function useContent() {
    return (
      <>
        <path d="M14 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 12Zm-2-4a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 8Zm0 8a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 16Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "more-vertical"}
      content={useContent()}
    />
  );
}
