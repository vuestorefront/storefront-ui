import { PropFunction, QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfModalProps = QwikIntrinsicElements['modal'] & {
  as: any;
  class?: string;
  ref?: Signal<Element>
  open?: boolean;
  disableClickAway?: boolean;
  disableEsc?: boolean;
  onClose$?: PropFunction<() => void>;
};
