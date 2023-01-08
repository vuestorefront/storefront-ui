import classNames from 'classnames';
import { generateId } from '@storefront-ui/shared';
import { VsfInputSizes } from './types';

import type { VsfInputProps } from './types';

export default function VsfInput({
  label,
  disabled,
  required,
  value,
  size = VsfInputSizes.base,
  slotPrefix,
  slotSuffix,
  placeholder,
  errorMessage,
  helpText,
  requiredText,
  invalid,
  readonly,
  className,
  characterLimit = 12,
  onChange,
  ...attributes
}: VsfInputProps) {
  const inputId = generateId('input');
  const isAboveLimit = value.length > characterLimit;

  const charsCount = characterLimit - value.length;
  return (
    <div
      className={classNames([
        'vsf-input',
        `vsf-input--size-${size}`,
        { 'vsf-input--disabled': disabled, 'vsf-input--invalid': invalid, 'vsf-input--readonly': readonly },
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
          data-testid="input-field"
        />
        {slotSuffix ? <div className="vsf-input__suffix">{slotSuffix}</div> : null}
      </div>
      <div className="vsf-input__bottom-wrapper">
        <div>
          {invalid ? (
            <p className="vsf-input__error-message" data-testid="input-error-message">
              {errorMessage}
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
