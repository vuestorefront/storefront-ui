import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { VsfCheckboxAlignment, VsfCheckboxProps } from './types';

export default function VsfCheckbox({
  value,
  name,
  checked,
  label,
  disabled,
  alignment = VsfCheckboxAlignment.leading,
  required,
  invalid,
  errorText,
  helpText,
  requiredText,
  indeterminate = false,
  className,
  role,
  labelTag,
  onChange,
  ...attributes
}: VsfCheckboxProps) {
  const LabelTag = labelTag || 'label';
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [checkboxRef, indeterminate]);
  return (
    <LabelTag
      className={classNames(
        'vsf-checkbox',
        {
          'vsf-checkbox--disabled': disabled,
          'vsf-checkbox--required': !indeterminate && required,
          'vas-checkbox--invalid': invalid && !checked,
        },
        className,
      )}
      {...attributes}
      data-testid="checkbox"
    >
      <span
        className={classNames('vsf-checkbox__wrapper', alignment && `vsf-checkbox__wrapper--alignment-${alignment}`)}
      >
        <input
          className={classNames('vsf-checkbox__input', {
            'vsf-checkbox__input--invalid': invalid && !indeterminate && !disabled && !checked,
          })}
          type="checkbox"
          disabled={disabled}
          required={!indeterminate && required}
          checked={checked}
          ref={checkboxRef}
          value={value}
          name={name}
          role={role || undefined}
          onChange={onChange}
          data-testid="checkbox-input"
        />
        {label ? (
          <span className="vsf-checkbox__label" data-testid="checkbox-label">
            {label}
          </span>
        ) : null}
      </span>
      {errorText || helpText ? (
        <div className={classNames('vsf-checkbox__text-wrapper', `vsf-checkbox__text-wrapper-${alignment}`)}>
          {invalid && !checked && !disabled && !indeterminate && !!errorText && !required && (
            <span className="vsf-checkbox__error-text" data-testid="checkbox-error-text">
              {errorText}
            </span>
          )}
          {helpText && (
            <span className="vsf-checkbox__help-text" data-testid="checkbox-help-text">
              {helpText}
            </span>
          )}
        </div>
      ) : null}
      {!indeterminate && required && requiredText && (
        <span className="vsf-checkbox__required-text" data-testid="checkbox-required-text">
          {requiredText}
        </span>
      )}
    </LabelTag>
  );
}
