import * as React from "react";

export interface VsfIconHomeProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconHome(props: VsfIconHomeProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.293 2.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1-1.414 1.414L20 12.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.586l-.293.293a1 1 0 0 1-1.414-1.414l9-9ZM6 10.414V20h3v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h3v-9.586l-6-6-6 6ZM13 20v-4h-2v4h2Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "home"}
      content={useContent()}
    />
  );
}
