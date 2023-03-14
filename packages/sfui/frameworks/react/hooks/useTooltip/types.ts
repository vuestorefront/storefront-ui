import type { Prettify, UsePopoverOptions } from '@storefront-ui/react';

export type UseTooltipOptions = Prettify<
  Omit<UsePopoverOptions, 'isOpen'> & {
    arrowSize?: `${number}px` | `${number}em` | `${number}rem`;
  }
>;
