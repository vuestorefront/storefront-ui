import { QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfCheckboxProps = QwikIntrinsicElements['input'] & {
  ref?: Signal<Element |undefined>
  invalid?: boolean;
};
