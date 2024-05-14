'use client';
import { useTooltip } from '@storefront-ui/react';
import type { SfTooltipProps } from '@storefront-ui/react';

export default function SfTooltip(props: SfTooltipProps) {
  const { children, label, className, style, showArrow, ...tooltipOptions } = props;
  const { isOpen, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip(tooltipOptions);

  return (
    <span {...getTriggerProps({ className, style })} data-testid="tooltip">
      {children}
      {label && isOpen && (
        <div
          {...getTooltipProps({
            role: 'tooltip',
            className: 'bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow',
          })}
        >
          {label}
          {showArrow && <span {...getArrowProps({ className: 'bg-black rotate-45' })} />}
        </div>
      )}
    </span>
  );
}
