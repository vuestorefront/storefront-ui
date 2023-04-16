import { Signal } from '@builder.io/qwik';
import { QwikIntrinsicElements, JSXChildren } from '@builder.io/qwik';
import { SfButtonSize, SfButtonVariant } from '@storefront-ui/shared';

export { SfButtonSize, SfButtonVariant };

export type SfButtonProps = QwikIntrinsicElements['button'] & QwikIntrinsicElements['a'] & {
  as?: any;
  elRef?: Signal<Element |undefined>
  slotPrefix?: JSXChildren;
  slotSuffix?: JSXChildren;
  size?: `${SfButtonSize}`;
  variant?: `${SfButtonVariant}`;
  square?: boolean;
};
