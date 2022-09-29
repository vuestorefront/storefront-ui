import * as React from "react";

export interface VsfIconSelectChevronProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconSelectChevron(props: VsfIconSelectChevronProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M.41 6.291c.39.39 1.02.39 1.41 0l3.885-3.875L9.59 6.292A.998.998 0 0 0 11 4.88L6.412.293a1 1 0 0 0-1.414 0L.41 4.88a.998.998 0 0 0 0 1.411ZM11 13.71a.998.998 0 0 0-1.41 0l-3.885 3.875-3.884-3.876A.998.998 0 0 0 .41 15.12l4.587 4.587a1 1 0 0 0 1.414 0L11 15.12a.998.998 0 0 0 0-1.411Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "select-chevron"}
      content={useContent()}
    />
  );
}
