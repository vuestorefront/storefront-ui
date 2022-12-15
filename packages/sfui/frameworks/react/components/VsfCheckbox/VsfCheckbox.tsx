import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { VsfCheckboxAlignments, VsfCheckboxProps } from './types';

export default function VsfCheckbox({
  value,
  checked,
  label,
  disabled,
  alignment = VsfCheckboxAlignments.leading,
  required,
  invalid,
  errorText,
  helpText,
  requiredText,
  indeterminate = false,
  className,
  onChange,
  ...attributes
}: VsfCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [checkboxRef, indeterminate]);
  return (
    <div
      className={classNames(
        'vsf-checkbox',
        {
          'vsf-checkbox--disabled': disabled,
          'vsf-checkbox--required': required,
          'vas-checkbox--invalid': invalid && !checked,
        },
        className,
      )}
      {...attributes}
      data-testid="checkbox"
    >
      <label
        className={classNames('vsf-checkbox__wrapper', alignment && `vsf-checkbox__wrapper--alignment-${alignment}`)}
      >
        <input
          className={classNames('vsf-checkbox__input', {
            'vsf-checkbox__input--invalid': invalid && !indeterminate && !disabled && !checked,
          })}
          type="checkbox"
          disabled={disabled}
          required={required}
          checked={checked}
          ref={checkboxRef}
          value={value}
          onChange={(event) => onChange(event.target.value, event)}
          data-testid="checkbox-input"
        />
        <span className="vsf-checkbox__label" data-testid="checkbox-label">
          {label}
        </span>
      </label>
      <div className={classNames('vsf-checkbox__text-wrapper', `vsf-checkbox__text-wrapper-${alignment}`)}>
        {invalid && !checked && !disabled && !indeterminate && !!errorText && !required && (
          <p className="vsf-checkbox__error-text" data-testid="checkbox-error-text">
            {errorText}
          </p>
        )}
        {helpText && (
          <p className="vsf-checkbox__help-text" data-testid="checkbox-help-text">
            {helpText}
          </p>
        )}
      </div>
      {required && requiredText && (
        <p className="vsf-checkbox__required-text" data-testid="checkbox-required-text">
          {requiredText}
        </p>
      )}
    </div>
  );
}
