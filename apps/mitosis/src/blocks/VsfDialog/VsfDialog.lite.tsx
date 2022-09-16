import { useRef, useStore, onMount, onUpdate, Show, onUnMount } from '@builder.io/mitosis';
import { SlotType } from '../../functions/types';
import VsfButton from '../VsfButton/VsfButton.lite';
import VsfIconClose from '../VsfIcons/VsfIconClose.lite';

export interface VsfDialogProps {
  children?: SlotType;
  /* IF-react */
  open?: boolean;
  /* ENDIF-react */
  /* IF-vue */
  modelValue?: boolean;
  /* ENDIF-vue */
  classes?: string;
  closeable?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

const DEFAULT_VALUES: Required<VsfDialogProps> = {
  children: '',
  /* IF-react */
  open: false,
  /* ENDIF-react */
  /* IF-vue */
  modelValue: false,
  /* ENDIF-vue */
  classes: '',
  closeable: true,
  onClose: (isClosed) => isClosed,
};

export default function VsfDialog(props: VsfDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const state = useStore({
    get useClassesProp() {
      return props.classes ?? DEFAULT_VALUES.classes;
    },
    get useClosableProp() {
      return props.closeable ?? DEFAULT_VALUES.closeable;
    },
    get useOpenProp() {
      /* IF-vue */
      return props.modelValue ?? DEFAULT_VALUES.modelValue;
      /* ENDIF-vue */
      /* IF-react */
      return props.open ?? DEFAULT_VALUES.open;
      /* ENDIF-react */
    },
    toggleDialog() {
      if (state.useOpenProp && dialogRef.getAttribute('open') === null) dialogRef?.showModal()
      else if (!state.useOpenProp) dialogRef?.close();
    },
    handleCloseDialog() {
      dialogRef?.close();
      /* IF-vue */
      this.$emit('update:modelValue', false);
      /* ENDIF-vue */
      props.onClose && props.onClose(false);
    },
    clickHandler(ev: MouseEvent) {
      const rect = dialogRef.getBoundingClientRect();
      const isOutsideDialog = ev.clientY < rect.top
        || ev.clientY > rect.top + rect.height
        || ev.clientX < rect.left
        || ev.clientX > rect.left + rect.width;
      if (isOutsideDialog) {
        state.handleCloseDialog()
      }
    }
  });

  onMount(() => {
    state.toggleDialog();
    dialogRef.addEventListener('click', state.clickHandler);
  })

  onUnMount(() => {
    // TODO: cannot remove listener in vue because there is no `beforeUnmount` hook :/
    dialogRef.removeEventListener('click', state.clickHandler);
  })

  onUpdate(() => {
    state.toggleDialog();
    setTimeout(() => {
      (dialogRef?.querySelector('[autofocus]') as HTMLElement)?.focus()
    })
  })

  return <dialog ref={dialogRef} class={`backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`}>
    <div class={`p-6 lg:p-10 relative ${state.useClassesProp}`}>
      <Show when={state.useClosableProp}>
        <VsfButton
          classes="rounded-full top-2 right-2 absolute"
          onClick={() => state.handleCloseDialog()}
          variant='tertiary'
          icon={true}
        >
          <VsfIconClose />
        </VsfButton>
      </Show>
      {props.children}
    </div>
  </dialog>
}
