import classNames from 'classnames';
import type { VsfSelectOptionProps } from './types';

export default function VsfSelectOption({
  className,
  children,
  value,
  ariaSelected,
  ...attributes
}: VsfSelectOptionProps) {
  const classes = classNames('vsf-select__option', className);
  return (
    <option value={value} className={classes} aria-selected={ariaSelected} {...attributes}>
      {children}
    </option>
  );
}
