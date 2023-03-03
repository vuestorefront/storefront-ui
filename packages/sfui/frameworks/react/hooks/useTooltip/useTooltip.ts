import { useRef } from 'react';
import { arrow, flip, offset, shift } from '@floating-ui/react-dom';

import { composeHandlers, createPropsGetter } from '../../shared/utils';
import { VsfPopoverBasePlacement, usePopover } from '../usePopover';
import { useDisclosure } from '../useDisclosure';
import { UseTooltipOptions } from './types';

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
      const basePlacement = placement.split('-')[0] as VsfPopoverBasePlacement<typeof placement>;
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
      };
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

  return {
    refs: {
      ...refs,
      arrow: arrowRef,
    },
    style: {
      floating: floatingStyle,
      arrow: arrowStyle(),
    },
    isOpen,
    open,
    close,
    toggle,
    getTriggerProps,
    getTooltipProps,
    getArrowProps,
  };
}
