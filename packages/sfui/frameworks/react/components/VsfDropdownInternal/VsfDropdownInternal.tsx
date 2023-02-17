import { noop } from '@storefront-ui/shared';
import classNames from 'classnames';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import type { VsfDropdownInternalProps } from './types';
import { VsfDropdownInternalTriggerEvent, VsfDropdownInternalPlacement } from './types';
import { useTrapFocus } from '../../shared/useTrapFocus/useTrapFocus';

export default function VsfDropdownInternal({
  open,
  placement = VsfDropdownInternalPlacement.bottom,
  triggerEvent = VsfDropdownInternalTriggerEvent.click,
  disabled,
  slotTrigger,
  children,
  triggerClass,
  dropdownClass,
  className,
  onOpenUpdate,
  ...attributes
}: VsfDropdownInternalProps): JSX.Element {
  const dropdownRef = useRef(null);
  const dropdownDropdownRef = useRef(null);

  const isHoverEvent = () => triggerEvent === VsfDropdownInternalTriggerEvent.hover;
  const isClickEvent = () => triggerEvent === VsfDropdownInternalTriggerEvent.click;
  const onClose = () => onOpenUpdate?.(false);
  useClickAway(dropdownRef, onClose);
  useTrapFocus(dropdownDropdownRef);
  const onEscClick = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') onClose();
  };

  const onKeyDownTrigger = (event: KeyboardEvent) => {
    if (event.code === 'Enter' || event.code === 'Space') onOpenUpdate?.(!open);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames([
        'vsf-dropdown-internal',
        `vsf-dropdown-internal--${placement}`,
        { 'vsf-dropdown-internal--disabled': disabled },
        className,
      ])}
      ref={dropdownRef}
      onMouseEnter={() => (isHoverEvent() ? onOpenUpdate?.(true) : noop)}
      onMouseLeave={() => (isHoverEvent() ? onOpenUpdate?.(false) : noop)}
      onKeyDown={onEscClick}
      data-testid="dropdown"
      {...attributes}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */}
      <div
        data-testid="dropdown-trigger"
        className={classNames('vsf-dropdown-internal__trigger', triggerClass)}
        onClick={() => (isClickEvent() ? onOpenUpdate?.(!open) : noop)}
        onKeyDown={onKeyDownTrigger}
      >
        {slotTrigger}
      </div>
      {open ? (
        <div
          className={classNames('vsf-dropdown-internal__dropdown', dropdownClass)}
          data-testid="dropdown-dropdown"
          ref={dropdownDropdownRef}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
