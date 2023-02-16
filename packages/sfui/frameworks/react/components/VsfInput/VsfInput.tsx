import classNames from 'classnames';
import { useId } from 'react';
import { noop } from '@storefront-ui/shared';
import { VsfInputSize } from './types';

import type { VsfInputProps } from './types';

export default function VsfInput({
  label,
  disabled,
  required,
  value,
  size = VsfInputSize.base,
  slotPrefix,
  slotSuffix,
  placeholder,
  errorText,
  helpText,
  requiredText,
  invalid,
  readonly,
  className,
  characterLimit,
  onChange = noop,
  onClick,
  ...attributes
}: VsfInputProps) {
  const inputId = useId();
  const isAboveLimit = characterLimit ? value.length > characterLimit : false;

  const charsCount = characterLimit ? characterLimit - value.length : null;
  return (
    <div
      className={classNames([
        'vsf-input',
        `vsf-input--size-${size}`,
        {
          'vsf-input--disabled': disabled,
          'vsf-input--invalid': invalid && !disabled,
        },
        className,
      ])}
      {...attributes}
      data-testid="input"
    >
      {label ? (
        <label htmlFor={inputId} className="vsf-input__label" data-testid="input-label">
          {label}
        </label>
      ) : null}

      <div className="vsf-input__input-wrapper group">
        {slotPrefix ? <div className="vsf-input__prefix">{slotPrefix}</div> : null}
        <input
          id={inputId}
          className="vsf-input__field"
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readonly}
          onChange={onChange}
          onClick={onClick}
          data-testid="input-field"
        />
        {slotSuffix ? <div className="vsf-input__suffix">{slotSuffix}</div> : null}
      </div>
      <div className="vsf-input__bottom-wrapper">
        <div>
          {invalid && !disabled ? (
            <p className="vsf-input__error-text" data-testid="input-error-text">
              {errorText}
            </p>
          ) : null}
          {helpText ? (
            <p className="vsf-input__help-text" data-testid="input-help-text">
              {helpText}
            </p>
          ) : null}
          {requiredText && required ? (
            <p className="vsf-input__required-text" data-testid="input-required-text">
              {requiredText}
            </p>
          ) : null}
        </div>
        {characterLimit && !readonly ? (
          <p
            className={classNames([
              'vsf-input__character-limit',
              { 'vsf-input__character-limit--above': isAboveLimit },
            ])}
            data-testid="input-chars-count"
          >
            {charsCount}
          </p>
        ) : null}
      </div>
    </div>
  );
}
