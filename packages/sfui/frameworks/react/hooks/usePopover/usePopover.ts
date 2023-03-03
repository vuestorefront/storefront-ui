import { autoUpdate, useFloating } from '@floating-ui/react-dom';

import type { UsePopoverOptions } from './types';

export function usePopover(options: UsePopoverOptions) {
  const { isOpen, middleware, placement = 'bottom' } = options;

  const { refs, strategy, x, y, middlewareData } = useFloating<HTMLElement>({
    placement,
    open: isOpen,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const style = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  };

  return { refs, style, middlewareData };
}
