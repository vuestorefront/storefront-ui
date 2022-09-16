import * as React from "react";
import { useRef, useEffect } from "react";

export interface VsfDialogProps {
  children?: SlotType;

  open?: boolean;

  classes?: string;
  closeable?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

import { SlotType } from "../../functions/types";
import VsfButton from "../VsfButton/VsfButton.lite";
import VsfIconClose from "../VsfIcons/VsfIconClose.lite";
const DEFAULT_VALUES: Required<VsfDialogProps> = {
  children: "",

  open: false,

  classes: "",
  closeable: true,
  onClose: (isClosed) => isClosed,
};

export default function VsfDialog(props: VsfDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  function useClassesProp() {
    return props.classes ?? DEFAULT_VALUES.classes;
  }

  function useClosableProp() {
    return props.closeable ?? DEFAULT_VALUES.closeable;
  }

  function useOpenProp() {
    return props.open ?? DEFAULT_VALUES.open;
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
    const rect = dialogRef.current.getBoundingClientRect();
    const isOutsideDialog =
      ev.clientY < rect.top ||
      ev.clientY > rect.top + rect.height ||
      ev.clientX < rect.left ||
      ev.clientX > rect.left + rect.width;

    if (isOutsideDialog) {
      handleCloseDialog();
    }
  }

  useEffect(() => {
    toggleDialog();
    dialogRef.current.addEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    toggleDialog();
    setTimeout(() => {
      dialogRef.current?.querySelector("[autofocus]")?.focus();
    });
  });

  useEffect(() => {
    return () => {
      // TODO: cannot remove listener in vue because there is no `beforeUnmount` hook :/
      dialogRef.current.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={`backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`}
    >
      <div className={`p-6 lg:p-10 relative ${useClassesProp()}`}>
        {useClosableProp() ? (
          <>
            <VsfButton
              classes="rounded-full top-2 right-2 absolute"
              variant="tertiary"
              onClick={(event) => handleCloseDialog()}
              icon={true}
            >
              <VsfIconClose />
            </VsfButton>
          </>
        ) : null}

        {props.children}
      </div>
    </dialog>
  );
}
