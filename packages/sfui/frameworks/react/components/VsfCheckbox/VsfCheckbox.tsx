import classNames from 'classnames';
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
  className,
  onChange,
}: VsfCheckboxProps) {
  return (
    <div>
      <label
        className={classNames(
          'vsf-checkbox',
          disabled && 'vsf-checkbox--disabled',
          required && 'vsf-checkbox--required',
          alignment && `vsf-checkbox--alignment-${alignment}`,
          className,
        )}
      >
        <span>
          <input
            className="vsf-checkbox__input"
            type="checkbox"
            disabled={disabled}
            required={required}
            checked={checked}
            value={value}
            onChange={onChange}
          />
        </span>
        <span className="vsf-checkbox__label">{label}</span>
      </label>
      <div className="vsf-checkbox__text-wrapper">
        {invalid && !disabled && errorText && <p className="vsf-checkbox__error-text">{errorText}</p>}
        {helpText && <p className="vsf-checkbox__help-text">{helpText}</p>}
        {required && requiredText && <p className="vsf-checkbox__required-text">{requiredText}</p>}
      </div>
    </div>
  );
}
