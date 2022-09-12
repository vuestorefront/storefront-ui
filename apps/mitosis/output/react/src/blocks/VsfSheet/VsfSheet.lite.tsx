import * as React from "react";

export interface VsfSheetProps {
  children?: Element | Element[] | string;
}

export default function VsfSheet(props: VsfSheetProps) {
  return (
    <>
      <div className="absolute bg-white rounded-md empty:h-24 shadow-medium w-80">
        {props.children}
      </div>
    </>
  );
}
