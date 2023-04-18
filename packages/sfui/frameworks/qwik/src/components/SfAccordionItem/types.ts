import { JSXChildren, PropFunction, Signal } from '@builder.io/qwik';
import { QwikIntrinsicElements } from '@builder.io/qwik';

export type SfAccordionItemProps = QwikIntrinsicElements['details'] & {
  ref?: Signal<Element |undefined>
  onToggle$?: PropFunction<(open: boolean) => void>;
  summaryClass?: string;
};
