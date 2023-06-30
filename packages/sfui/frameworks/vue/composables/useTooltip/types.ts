import type { Prettify, CSSLength } from '@storefront-ui/shared';
import type { ReferenceElement } from '@floating-ui/vue';
import type { UsePopoverOptions } from '../usePopover';

export type UseTooltipOptions<ReferenceEl extends ReferenceElement = ReferenceElement> = Prettify<
  Omit<UsePopoverOptions<ReferenceEl>, 'isOpen'> & {
    arrowSize?: CSSLength;
  }
>;
