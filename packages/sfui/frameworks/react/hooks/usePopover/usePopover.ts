import { autoUpdate, useFloating } from '@floating-ui/react-dom';
import { SfPopoverPlacement, SfPopoverStrategy, type UsePopoverOptions } from '@storefront-ui/react';

export function usePopover(options: UsePopoverOptions) {
  const {
    isOpen,
    middleware,
    placement = SfPopoverPlacement.bottom,
    strategy: initialStrategy = SfPopoverStrategy.absolute,
  } = options;

  const { refs, strategy, x, y, middlewareData } = useFloating<HTMLElement>({
    strategy: initialStrategy,
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
