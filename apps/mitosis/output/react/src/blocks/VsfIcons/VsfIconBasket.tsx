import * as React from "react";

export interface VsfIconBasketProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconBasket(props: VsfIconBasketProps) {
  function useContent() {
    return (
      <>
        <path d="M17.7 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 3a1 1 0 0 1 1-1h2.307a2.5 2.5 0 0 1 2.436 1.938L6.988 5h12.59a2.5 2.5 0 0 1 2.426 3.106l-1.75 7A2.5 2.5 0 0 1 17.83 17H9.693a2.5 2.5 0 0 1-2.436-1.938L4.794 4.388A.5.5 0 0 0 4.307 4H2a1 1 0 0 1-1-1Zm6.45 4 1.756 7.612a.5.5 0 0 0 .487.388h8.136a.5.5 0 0 0 .485-.379l1.75-7A.5.5 0 0 0 19.579 7H7.449Z"
        />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "basket"}
      content={useContent()}
    />
  );
}
