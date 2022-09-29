import * as React from "react";

export interface VsfIconLogOutProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconLogOut(props: VsfIconLogOutProps) {
  function useContent() {
    return (
      <>
        <path d="M13 2a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8Z" />
        <path d="M16.38 7.293a1 1 0 0 1 1.414 0l3.913 3.913c.206.206.304.48.292.75V12a1 1 0 0 1-.58.908l-3.625 3.625a1 1 0 0 1-1.414-1.414L18.499 13H9.13a1 1 0 1 1 0-2h9.543L16.38 8.707a1 1 0 0 1 0-1.414Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "log-out"}
      content={useContent()}
    />
  );
}
