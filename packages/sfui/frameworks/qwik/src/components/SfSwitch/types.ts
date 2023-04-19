import { PropFunction, QwikChangeEvent, QwikIntrinsicElements, Signal } from '@builder.io/qwik';

export type SfSwitchProps = QwikIntrinsicElements['input'] & {
  ref?: Signal<Element | undefined>;
  class?: string;
  invalid?: boolean;
  onChange$: PropFunction<(event: QwikChangeEvent<HTMLInputElement>) => void>;
};
