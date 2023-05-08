import classNames from 'classnames';
import { useDropdown } from '@storefront-ui/react';
import type { SfDropdownProps } from '@storefront-ui/react';

export default function SfDropdown(props: SfDropdownProps) {
  const { children, trigger, open: isOpen = false, className, style: containerStyle, ...dropdownOptions } = props;
  const { refs, style: dropdownStyle } = useDropdown({ isOpen, ...dropdownOptions });

  return (
    <div
      ref={refs.setReference}
      className={classNames('w-max', className)}
      style={containerStyle}
      data-testid="dropdown"
    >
      {trigger}
      {isOpen && (
        <div ref={refs.setFloating} style={dropdownStyle} aria-hidden={!isOpen} data-testid="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}
