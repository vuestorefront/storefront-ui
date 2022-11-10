import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { VsfSelectSizes } from './types';

import type { VsfSelectProps } from './types';

export default function VsfSelect({
  className,
  label,
  disabled,
  required,
  size = VsfSelectSizes.base,
  children,
  slotPlaceholder,
  placeholder,
  errorText,
  helpText,
  requiredText,
  invalid,
  onChange,
}: VsfSelectProps) {
  function changedValue(event: ChangeEvent<HTMLSelectElement>) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    onChange(selectedValue);
  }
  return (
    <div className={classNames('vsf-select', { 'vsf-select--disabled': disabled }, className)}>
      <div className="vsf-select__wrapper">
        <div
          className={classNames('vsf-select__wrapper-input', {
            'vsf-select__wrapper-input--with-label': label,
          })}
        >
          <select
            id={label}
            required={required}
            disabled={disabled}
            className={classNames('vsf-select__input peer', {
              'vsf-select__input--base': size === 'base',
              'vsf-select__input--small': size === 'sm',
              'vsf-select__input--large': size === 'lg',
              'vsf-select__input--invalid': invalid,
            })}
            onChange={changedValue}
          >
            <option
              value=""
              className={classNames('vsf-select__placeholder', {
                'vsf-select__placeholder--base': size === 'base',
                'vsf-select__placeholder--small': size === 'sm',
                'vsf-select__placeholder--large': size === 'lg',
              })}
            >
              {placeholder || slotPlaceholder}
            </option>
            {children}
          </select>
          <label htmlFor={label} className="vsf-select__label">
            {label}
          </label>
        </div>
      </div>
      <div>
        {invalid ? (
          <span className="vsf-select__error-text" aria-live={invalid ? 'assertive' : 'off'}>
            {errorText}
          </span>
        ) : null}
        {helpText ? <span className="vsf-select__help-text">{helpText}</span> : null}
        {required ? <span className="vsf-select__required">{requiredText}</span> : null}
      </div>
    </div>
  );
}
