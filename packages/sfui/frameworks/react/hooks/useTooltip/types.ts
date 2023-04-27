import type { Prettify, CSSLength } from '@storefront-ui/shared';
import type { UsePopoverOptions } from '../usePopover';

export type UseTooltipOptions = Prettify<
  Omit<UsePopoverOptions, 'isOpen'> & {
    arrowSize?: CSSLength;
  }
>;
