import classNames from 'classnames';
import type { ChangeEvent } from 'react';
import { VsfSelectSizes } from './types';
import VsfSelectOption from './VsfSelectOption';

import type { VsfSelectProps } from './types';

export default function VsfSelect({
  className,
  options,
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
  ...attributes
}: VsfSelectProps) {
  function changedValue(event: ChangeEvent<HTMLSelectElement>) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    onChange(selectedValue);
  }
  return (
    <div
      className={classNames('vsf-select', { 'vsf-select--disabled': disabled }, className)}
      {...attributes}
      data-testid="select"
    >
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
              'vsf-select__input--small': size === VsfSelectSizes.sm,
              'vsf-select__input--large': size === VsfSelectSizes.lg,
              'vsf-select__input--invalid': invalid,
            })}
            data-testid="select-input"
            onChange={changedValue}
          >
            <option
              value=""
              className={classNames('vsf-select__placeholder', {
                'vsf-select__placeholder--small': size === VsfSelectSizes.sm,
                'vsf-select__placeholder--large': size === VsfSelectSizes.lg,
              })}
              data-testid="select-placeholder"
            >
              {placeholder || slotPlaceholder}
            </option>
            {children ||
              options.map((option: string) => (
                <VsfSelectOption key={option} value={option}>
                  {option}
                </VsfSelectOption>
              ))}
          </select>
          <label htmlFor={label} className="vsf-select__label" data-testid="select-label">
            {label}
          </label>
        </div>
      </div>
      <div>
        {invalid ? (
          <span
            className="vsf-select__error-text"
            aria-live={invalid ? 'assertive' : 'off'}
            data-testid="select-invalid-text"
          >
            {errorText}
          </span>
        ) : null}
        {helpText ? (
          <span className="vsf-select__help-text" data-testid="select-help-text">
            {helpText}
          </span>
        ) : null}
        {required ? (
          <span className="vsf-select__required" data-testid="select-required-text">
            {requiredText}
          </span>
        ) : null}
      </div>
    </div>
  );
}
