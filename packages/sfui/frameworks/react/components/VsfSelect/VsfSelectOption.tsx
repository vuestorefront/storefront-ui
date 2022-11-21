import classNames from 'classnames';
import type { VsfSelectOptionProps } from './types';

export default function VsfSelectOption({ className, children, value, ariaSelected }: VsfSelectOptionProps) {
  const classes = classNames('vsf-select__option', className);
  return (
    <option value={value} className={classes} aria-selected={ariaSelected}>
      {children}
    </option>
  );
}
