'use client';
import { useTooltip } from '@storefront-ui/react';
import type { SfTooltipProps } from '@storefront-ui/react';
import { useEffect } from 'react';

export default function SfTooltip(props: SfTooltipProps) {
  const {
    children,
    label,
    className,
    style,
    open: openProp,
    showArrow,
    id,
    'data-testid': dataTestid,
    ...tooltipOptions
  } = props;
  const { isOpen, open, close, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip(tooltipOptions);

  useEffect(() => {
    if (openProp) open();
    else close();
  }, [openProp, open, close]);

  return (
    <span data-testid={dataTestid ?? 'tooltip'} {...getTriggerProps({ className, style })}>
      {children}
      {label && isOpen && (
        <div
          {...getTooltipProps({
            role: 'tooltip',
            id,
            className: 'bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow-sm',
          })}
        >
          {label}
          {showArrow && <span {...getArrowProps({ className: 'bg-black rotate-45' })} />}
        </div>
      )}
    </span>
  );
}
