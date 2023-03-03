import classNames from 'classnames';
import { useDropdown } from '../../hooks/useDropdown';
import { VsfDropdownProps } from './types';

export default function VsfDropdown(props: VsfDropdownProps) {
  const { children, trigger, isOpen, className, style: containerStyle, ...dropdownOptions } = props;
  const { refs, style: dropdownStyle } = useDropdown({ isOpen, ...dropdownOptions });

  return (
    <div ref={refs.setReference} className={classNames('w-max', className)} style={containerStyle}>
      {trigger}
      {isOpen && (
        <div ref={refs.setFloating} style={dropdownStyle} aria-hidden={!isOpen}>
          {children}
        </div>
      )}
    </div>
  );
}
