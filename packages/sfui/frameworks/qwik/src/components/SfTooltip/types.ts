import { QwikIntrinsicElements } from '@builder.io/qwik';

export type SfTooltipProps = QwikIntrinsicElements['span'] & {
  class?: string;
  label: string;
  showArrow?: boolean;
};
