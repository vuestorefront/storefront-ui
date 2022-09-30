import * as React from "react";

export interface VsfIconAddedToBasketProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.lite";
const DEFAULT_VALUES = {
  size: "base",
};

export default function VsfIconAddedToBasket(props: VsfIconAddedToBasketProps) {
  function useContent() {
    return (
      <>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 2a1 1 0 0 0 0 2h2.307a.5.5 0 0 1 .487.388l2.463 10.674A2.5 2.5 0 0 0 9.693 17h8.136a2.5 2.5 0 0 0 2.425-1.894l1.75-7A2.5 2.5 0 0 0 19.58 5H6.988l-.245-1.062A2.5 2.5 0 0 0 4.307 2H2Zm10.627 12.553c.197.214.463.332.74.332h.02a.988.988 0 0 0 .749-.364l4.633-5.473a1.187 1.187 0 0 0-.06-1.593.978.978 0 0 0-1.468.064l-3.904 4.618-1.873-2.03a.984.984 0 0 0-1.469 0 1.197 1.197 0 0 0 0 1.592l2.632 2.854Z"
        />
        <path d="M9.7 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
      </>
    );
  }

  return (
    <VsfIconBase
      viewBox="0 0 24 24"
      className={props.className || ""}
      size={props.size || DEFAULT_VALUES.size}
      ariaLabel={props.ariaLabel || "added-to-basket"}
      content={useContent()}
    />
  );
}
