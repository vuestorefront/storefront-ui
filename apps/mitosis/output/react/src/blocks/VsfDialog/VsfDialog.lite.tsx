import * as React from "react";
import { useRef, useEffect } from "react";

export interface VsfDialogProps {
  children?: SlotType;

  open?: boolean;

  classes?: string;
  disableClose?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

import { SlotType } from "../../functions/types";
import VsfButton from "../VsfButton/VsfButton.lite";
// import VsfIconClose from "../VsfIcons/VsfIconClose.lite";
const DEFAULT_VALUES: Omit<
  Required<VsfDialogProps>,
  "open" | "disableClose"
> = {
  children: "",

  classes: "",
  onClose: (isClosed) => isClosed,
};

export default function VsfDialog(props: VsfDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  function useClassesProp() {
    return props.classes ?? DEFAULT_VALUES.classes;
  }

  function useOpenProp() {
    return props.open;
  }

  function toggleDialog() {
    if (useOpenProp() && dialogRef.current.getAttribute("open") === null)
      dialogRef.current?.showModal();
    else if (!useOpenProp()) dialogRef.current?.close();
  }

  function handleCloseDialog() {
    dialogRef.current?.close();
    props.onClose && props.onClose(false);
  }

  function clickHandler(ev) {
    if (ev.target === dialogRef.current) {
      handleCloseDialog();
    }
  }

  useEffect(() => {
    toggleDialog();
  }, []);

  useEffect(() => {
    toggleDialog();
    setTimeout(() => {
      dialogRef.current?.querySelector("[autofocus]")?.focus();
    });
  });

  return (
    <dialog
      ref={dialogRef}
      className={`backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`}
      onClick={(e) => clickHandler(e)}
    >
      <div className={`p-6 lg:p-10 relative ${useClassesProp()}`}>
        {props.disableClose ? (
          <>
            <VsfButton
              classes="rounded-full top-2 right-2 absolute"
              variant="tertiary"
              onClick={(event) => handleCloseDialog()}
              icon={true}
            >
              {/* <VsfIconClose /> */}
            </VsfButton>
          </>
        ) : null}

        {props.children}
      </div>
    </dialog>
  );
}
