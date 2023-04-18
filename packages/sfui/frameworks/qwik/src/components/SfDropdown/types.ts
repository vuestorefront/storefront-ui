import { PropFunction, QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfDropdownProps = {
  //Omit<UseDropdownOptions, 'isOpen'> &
  style?: QwikIntrinsicElements['div']['style']
  ref?: Signal<Element | undefined>;
  class?: string;
  open?: boolean;
  onClose$?: PropFunction<() => void>;
};
