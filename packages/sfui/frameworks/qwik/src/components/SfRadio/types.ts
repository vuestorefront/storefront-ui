import { PropFunction, QwikChangeEvent, QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfRadioProps = QwikIntrinsicElements['input'] & {
  class?: string;
  ref?: Signal<Element |undefined>
  invalid?: boolean;
  onChange$: PropFunction<(event: QwikChangeEvent<HTMLInputElement>)=> void>
};
