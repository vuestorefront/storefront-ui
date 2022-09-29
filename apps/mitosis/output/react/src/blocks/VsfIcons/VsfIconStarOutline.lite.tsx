import * as React from "react";

export interface VsfIconStarOutlineProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconStarOutline(props: VsfIconStarOutlineProps) {
  function useContent() {
    return (
      <>
        <path d="m19.65 9.477-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0l-1.89 4.46-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75ZM12 15.837l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38 1.7-4.03 1.71 4.04 4.38.38-3.32 2.88 1 4.28-3.77-2.28Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "star-outline"}
      content={useContent()}
    />
  );
}
