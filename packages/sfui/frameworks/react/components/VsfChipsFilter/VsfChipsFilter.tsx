import classNames from 'classnames';
import { VsfChipsFilterProps, VsfChipsFilterVariants } from './types';

export default function VsfChipsFilter({
  onChange,
  value,
  label,
  children,
  name,
  checked = false,
  disabled = false,
  type = 'radio',
  size = VsfChipsFilterVariants.base,
  className = '',
}: VsfChipsFilterProps): JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classNames('vsf-chips-filter', `vsf-chips-filter--size-${size}`, className)}>
      <input
        className="peer vsf-chips-filter__input"
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
        name={name}
        defaultChecked={checked}
      />
      <div className="vsf-chips-filter__peer-wrapper">
        {children && <div className="vsf-chips-filter__thumbnail">{children}</div>}
        {label && <span className="vsf-chips-filter__label">{label}</span>}
      </div>
    </label>
  );
}
