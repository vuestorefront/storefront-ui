import type { Prettify } from '../../shared/types';
import type { UsePopoverOptions } from '../usePopover';

export type UseTooltipOptions = Prettify<
  Omit<UsePopoverOptions, 'isOpen'> & {
    arrowSize?: `${number}px` | `${number}em` | `${number}rem`;
  }
>;
