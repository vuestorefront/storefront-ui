import * as React from "react";

export interface VsfIconDeleteProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconDelete(props: VsfIconDeleteProps) {
  function useContent() {
    return (
      <>
        <path d="M13.6 1.8a2 2 0 0 0-3.2 0L9.5 3H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-5.5l-.9-1.2Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.328 21a2.5 2.5 0 0 1-2.494-2.322L5 7h14l-.834 11.678A2.5 2.5 0 0 1 15.672 21H8.328Zm0-2a.5.5 0 0 1-.499-.464L7.148 9h9.704l-.681 9.536a.5.5 0 0 1-.499.464H8.328Z"
        />
        <path d="M13.6 1.8a2 2 0 0 0-3.2 0L9.5 3H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-5.5l-.9-1.2Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.328 21a2.5 2.5 0 0 1-2.494-2.322L5 7h14l-.834 11.678A2.5 2.5 0 0 1 15.672 21H8.328Zm0-2a.5.5 0 0 1-.499-.464L7.148 9h9.704l-.681 9.536a.5.5 0 0 1-.499.464H8.328Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "delete"}
      content={useContent()}
    />
  );
}
