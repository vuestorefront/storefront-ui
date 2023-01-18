import classNames from 'classnames';
import { VsfTooltipPlacement, VsfTooltipProps } from './types';
import { VsfDropdownInternal, VsfDropdownInternalTriggerEvent } from '../VsfDropdownInternal/index';

export default function VsfTooltip({
  label,
  hidePointer,
  placement = VsfTooltipPlacement.bottom,
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
      placement={placement}
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
