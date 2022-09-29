import * as React from "react";

export interface VsfIconListProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconList(props: VsfIconListProps) {
  function useContent() {
    return (
      <>
        <path d="M5 7.273C5 6.57 5.57 6 6.273 6h11.454a1.273 1.273 0 0 1 0 2.545H6.273C5.57 8.545 5 7.975 5 7.273Zm0 10.181c0-.702.57-1.272 1.273-1.272h11.454a1.273 1.273 0 1 1 0 2.545H6.273c-.703 0-1.273-.57-1.273-1.273Zm1.273-6.364a1.273 1.273 0 0 0 0 2.546h6.363a1.273 1.273 0 1 0 0-2.545H6.273Z" />
        <path d="M5 7.273C5 6.57 5.57 6 6.273 6h11.454a1.273 1.273 0 0 1 0 2.545H6.273C5.57 8.545 5 7.975 5 7.273Zm0 10.181c0-.702.57-1.272 1.273-1.272h11.454a1.273 1.273 0 1 1 0 2.545H6.273c-.703 0-1.273-.57-1.273-1.273Zm1.273-6.364a1.273 1.273 0 0 0 0 2.546h6.363a1.273 1.273 0 1 0 0-2.545H6.273Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "list"}
      content={useContent()}
    />
  );
}
