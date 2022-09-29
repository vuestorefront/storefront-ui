import * as React from "react";

export interface VsfIconCheckCircleProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconCheckCircle(props: VsfIconCheckCircleProps) {
  function useContent() {
    return (
      <>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "check-circle"}
      content={useContent()}
    />
  );
}
