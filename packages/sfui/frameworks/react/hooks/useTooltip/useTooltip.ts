import { useRef } from 'react';
import { arrow, flip, offset, shift } from '@floating-ui/react-dom';

import {
  composeHandlers,
  createPropsGetter,
  SfPopoverBasePlacement,
  usePopover,
  useDisclosure,
} from '@storefront-ui/react';
import type { UseTooltipOptions } from '@storefront-ui/react';
import { useKey } from 'react-use';

export function useTooltip(options?: UseTooltipOptions) {
  const {
    placement = 'top',
    middleware = [offset(8), shift(), flip()],
    arrowSize = '6px',
    ...popoverOptions
  } = options || {};
  const arrowRef = useRef<HTMLElement | null>(null);
  const { isOpen, open, close, toggle } = useDisclosure();
  const {
    refs,
    style: floatingStyle,
    middlewareData,
  } = usePopover({
    isOpen,
    placement,
    middleware: [...middleware, arrow({ element: arrowRef })],
    ...popoverOptions,
  });

  function arrowStyle() {
    if (middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const basePlacement = placement.split('-')[0] as SfPopoverBasePlacement<typeof placement>;
      return {
        position: 'absolute',
        width: arrowSize,
        height: arrowSize,
        top: typeof arrowY === 'number' ? `${arrowY}px` : '',
        left: typeof arrowX === 'number' ? `${arrowX}px` : '',
        [{
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[basePlacement]]: `calc(${arrowSize} / -2)`,
      } as const;
    }
    return {};
  }

  const getTriggerProps = createPropsGetter((userProps) => ({
    ref: refs.setReference,
    onMouseEnter: composeHandlers(open, userProps.onMouseEnter),
    onMouseLeave: composeHandlers(close, userProps.onMouseLeave),
  }));

  const getTooltipProps = createPropsGetter((userProps) => ({
    ref: refs.setFloating,
    style: { ...userProps.style, ...floatingStyle },
  }));

  const getArrowProps = createPropsGetter((userProps) => ({
    ref: arrowRef,
    style: { ...userProps.style, ...arrowStyle() },
  }));

  useKey('Escape', close, { target: refs.reference.current }, [close, refs.reference]);

  return {
    refs: {
      ...refs,
      arrow: arrowRef,
    },
    style: {
      floating: floatingStyle,
      arrow: arrowStyle(),
    },
    middlewareData,
    isOpen,
    open,
    close,
    toggle,
    getTriggerProps,
    getTooltipProps,
    getArrowProps,
  };
}
