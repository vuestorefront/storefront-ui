import * as React from "react";

export interface VsfOverlayProps {
  visible?: boolean;
  absolute?: boolean;
  onClick?: (e: Event) => void;
}

const DEFAULT_VALUES = {};

export default function VsfOverlay(props: VsfOverlayProps) {
  function positionClass() {
    return props.absolute ? "absolute" : "fixed";
  }

  return (
    <>
      {props.visible ? (
        <>
          <div
            onClick={(e) => props.onClick(e)}
            className={`w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-50 ${positionClass()}`}
          />
        </>
      ) : null}
    </>
  );
}
