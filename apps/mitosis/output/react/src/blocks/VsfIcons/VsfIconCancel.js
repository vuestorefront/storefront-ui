import * as React from "react";

export interface VsfIconCancelProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconCancel(props: VsfIconCancelProps) {
  function useContent() {
    return (
      <>
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm4.295 12.885a.997.997 0 1 1-1.41 1.41L12 13.41l-2.885 2.885a.997.997 0 1 1-1.41-1.41L10.59 12 7.705 9.115a.997.997 0 0 1 1.41-1.41L12 10.59l2.885-2.885a.997.997 0 0 1 1.41 1.41L13.41 12l2.885 2.885Z" />
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2Zm4.295 12.885a.997.997 0 1 1-1.41 1.41L12 13.41l-2.885 2.885a.997.997 0 1 1-1.41-1.41L10.59 12 7.705 9.115a.997.997 0 0 1 1.41-1.41L12 10.59l2.885-2.885a.997.997 0 0 1 1.41 1.41L13.41 12l2.885 2.885Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "cancel"}
      content={useContent()}
    />
  );
}
