import * as React from "react";

export interface VsfIconSafetyProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconSafety(props: VsfIconSafetyProps) {
  function useContent() {
    return (
      <>
        <path d="M12 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm5-7V6c0-2.76-2.24-5-5-5S7 3.24 7 6v3h10ZM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v3H8.9V6Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.34a2 2 0 0 1-1.212 1.839l-6 2.571a2 2 0 0 1-1.576 0l-6-2.571A2 2 0 0 1 4 17.34V10Zm2.5 0a.5.5 0 0 0-.5.5v6.51c0 .2.12.382.303.46l5.5 2.358a.5.5 0 0 0 .394 0l5.5-2.357a.5.5 0 0 0 .303-.46V10.5a.5.5 0 0 0-.5-.5h-11Z"
        />
        <path d="M12 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm5-7V6c0-2.76-2.24-5-5-5S7 3.24 7 6v3h10ZM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v3H8.9V6Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.34a2 2 0 0 1-1.212 1.839l-6 2.571a2 2 0 0 1-1.576 0l-6-2.571A2 2 0 0 1 4 17.34V10Zm2.5 0a.5.5 0 0 0-.5.5v6.51c0 .2.12.382.303.46l5.5 2.358a.5.5 0 0 0 .394 0l5.5-2.357a.5.5 0 0 0 .303-.46V10.5a.5.5 0 0 0-.5-.5h-11Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "safety"}
      content={useContent()}
    />
  );
}
