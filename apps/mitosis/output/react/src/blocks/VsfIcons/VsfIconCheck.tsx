import * as React from "react";

export interface VsfIconCheckProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconCheck(props: VsfIconCheckProps) {
  function useContent() {
    return (
      <>
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
        <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "check"}
      content={useContent()}
    />
  );
}
