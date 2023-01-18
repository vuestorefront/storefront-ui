import classNames from 'classnames';
import { VsfChipsFilterProps, VsfChipsFilterVariant } from './types';

export default function VsfChipsFilter({
  onChange,
  value,
  label,
  children,
  name,
  checked = false,
  disabled = false,
  type = 'radio',
  size = VsfChipsFilterVariant.base,
  className = '',
  ...attributes
}: VsfChipsFilterProps): JSX.Element {
  return (
    <label className={classNames('vsf-chips-filter', `vsf-chips-filter--size-${size}`, className)} {...attributes}>
      <input
        className="peer vsf-chips-filter__input"
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
        name={name}
        defaultChecked={checked}
      />
      <span className="vsf-chips-filter__peer-wrapper">
        {children && <span className="vsf-chips-filter__thumbnail">{children}</span>}
        {label && <span className="vsf-chips-filter__label">{label}</span>}
      </span>
    </label>
  );
}
