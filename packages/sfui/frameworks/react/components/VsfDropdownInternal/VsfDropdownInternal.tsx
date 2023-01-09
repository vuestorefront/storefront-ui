import { noop } from '@storefront-ui/shared';
import classNames from 'classnames';
import type { VsfDropdownInternalProps } from './types';
import { VsfDropdownInternalTriggerEvent, VsfDropdownInternalPlacement } from './types';

export default function VsfDropdownInternal({
  open,
  placement = VsfDropdownInternalPlacement.bottom,
  triggerEvent = VsfDropdownInternalTriggerEvent.click,
  disabled,
  slotTrigger,
  children,
  className,
  dropdownClass,
  onOpenUpdate,
  ...attributes
}: VsfDropdownInternalProps): JSX.Element {
  const isHoverEvent = () => triggerEvent === VsfDropdownInternalTriggerEvent.hover;
  const isClickEvent = () => triggerEvent === VsfDropdownInternalTriggerEvent.click;

  return (
    <div
      className={classNames([
        'vsf-dropdown-internal',
        `vsf-dropdown-internal--${placement}`,
        { 'vsf-dropdown-internal--disabled': disabled },
      ])}
      onMouseEnter={() => (isHoverEvent() ? onOpenUpdate?.(true) : noop)}
      onMouseLeave={() => (isHoverEvent() ? onOpenUpdate?.(false) : noop)}
      data-testid="dropdown"
      {...attributes}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */}
      <div
        data-testid="dropdown-trigger"
        className={classNames('vsf-dropdown-internal__trigger', dropdownClass)}
        onClick={() => (isClickEvent() ? onOpenUpdate?.(!open) : noop)}
      >
        {slotTrigger}
      </div>
      {open ? (
        <div className="vsf-dropdown-internal__dropdown" data-testid="dropdown-dropdown">
          {children}
        </div>
      ) : null}
    </div>
  );
}
