import { PropFunction, QwikMouseEvent, Signal } from '@builder.io/qwik';
import { QwikIntrinsicElements, JSXChildren } from '@builder.io/qwik';
import { SfButtonSize, SfButtonVariant } from '@storefront-ui/shared';

export { SfButtonSize, SfButtonVariant };

export type SfButtonProps = QwikIntrinsicElements['button'] & QwikIntrinsicElements['a'] & {
  as?: any;
  ref?: Signal<Element |undefined>
  size?: `${SfButtonSize}`;
  variant?: `${SfButtonVariant}`;
  square?: boolean;
  onClick$?: PropFunction<(event: QwikMouseEvent<HTMLButtonElement, MouseEvent>) => void>
};
