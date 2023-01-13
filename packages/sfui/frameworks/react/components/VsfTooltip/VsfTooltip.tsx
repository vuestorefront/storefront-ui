import classNames from 'classnames';
import { VsfTooltipPlacement, VsfTooltipProps } from './types';
import {
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '../VsfDropdownInternal/index';

function tooltipPlacement(placement: VsfTooltipPlacement) {
  switch (placement) {
    case VsfTooltipPlacement.top:
      return VsfDropdownInternalPlacement.top;

    case VsfTooltipPlacement.right:
      return VsfDropdownInternalPlacement.right;

    case VsfTooltipPlacement.left:
      return VsfDropdownInternalPlacement.left;

    default:
      return VsfDropdownInternalPlacement.bottom;
  }
}

export default function VsfTooltip({
  label,
  hidePointer,
  placement,
  open,
  children,
  className,
  onOpenUpdate,
  ...attributes
}: VsfTooltipProps): JSX.Element {
  return (
    <VsfDropdownInternal
      className={classNames('vsf-tooltip', className)}
      open={open}
      placement={tooltipPlacement(placement)}
      slotTrigger={<div className="vsf-tooltip__trigger">{children}</div>}
      triggerEvent={VsfDropdownInternalTriggerEvent.hover}
      onOpenUpdate={onOpenUpdate}
      data-testid="tooltip"
      {...attributes}
    >
      {label && (
        <div
          role="tooltip"
          className={classNames([
            `vsf-tooltip__label vsf-tooltip__label--${placement}`,
            { 'vsf-tooltip__label--without-pointer': hidePointer },
          ])}
          data-testid="tooltip-label"
        >
          {label}
        </div>
      )}
    </VsfDropdownInternal>
  );
}
