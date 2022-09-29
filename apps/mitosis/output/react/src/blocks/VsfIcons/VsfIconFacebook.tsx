import * as React from "react";

export interface VsfIconFacebookProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconFacebook(props: VsfIconFacebookProps) {
  function useContent() {
    return (
      <>
        <path d="m17.01 13.25.555-3.62h-3.473V7.282c0-.99.485-1.956 2.04-1.956h1.58V2.245S16.279 2 14.909 2c-2.86 0-4.73 1.734-4.73 4.872V9.63H7v3.62h3.18V22h3.912v-8.75h2.918Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "facebook"}
      content={useContent()}
    />
  );
}
