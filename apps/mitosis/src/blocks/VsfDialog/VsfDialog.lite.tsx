import { useRef, useStore, onMount, onUpdate, Show, onUnMount } from '@builder.io/mitosis';
import { SlotType } from '../../functions/types';
import VsfButton from '../VsfButton/VsfButton';
import VsfIconClose from '../VsfIcons/VsfIconClose';

export interface VsfDialogProps {
  children?: SlotType;
  /* IF-react */
  open?: boolean;
  /* ENDIF-react */
  /* IF-vue */
  modelValue?: boolean;
  /* ENDIF-vue */
  classes?: string;
  disableClose?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

const DEFAULT_VALUES: Omit<Required<VsfDialogProps>, 'open' | 'disableClose'> = {
  children: '',
  /* IF-vue */
  modelValue: false,
  /* ENDIF-vue */
  classes: '',
  onClose: (isClosed) => isClosed,
};

export default function VsfDialog(props: VsfDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const state = useStore({
    get useClassesProp() {
      return props.classes ?? DEFAULT_VALUES.classes;
    },
    get useOpenProp() {
      /* IF-vue */
      return props.modelValue;
      /* ENDIF-vue */
      /* IF-react */
      return props.open;
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
      if (ev.target === dialogRef) {
        state.handleCloseDialog();
      }
    }
  });

  onMount(() => {
    state.toggleDialog();
  })

  onUpdate(() => {
    state.toggleDialog();
    setTimeout(() => {
      (dialogRef?.querySelector('[autofocus]') as HTMLElement)?.focus()
    })
  })

  return <dialog
    ref={dialogRef}
    class={`backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`}
    onClick={(e) => state.clickHandler(e)}
  >
    <div class={`p-6 lg:p-10 relative ${state.useClassesProp}`}>
      <Show when={props.disableClose}>
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
