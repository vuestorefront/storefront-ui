import * as React from "react";

export interface VsfIconPersonProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconPerson(props: VsfIconPersonProps) {
  function useContent() {
    return (
      <>
        <path d="M12.4 12c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5s-2.3 5-5 5Zm0-8c-1.6 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.4-3-3-3Zm7.4 18c-.6 0-1-.4-1-1 0-3.5-2.9-6.4-6.4-6.4C8.9 14.6 6 17.5 6 21c0 .6-.4 1-1 1s-1-.4-1-1c0-4.6 3.8-8.4 8.4-8.4 4.6 0 8.4 3.8 8.4 8.4 0 .6-.5 1-1 1Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "person"}
      content={useContent()}
    />
  );
}
