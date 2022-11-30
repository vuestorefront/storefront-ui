import classNames from 'classnames';
import { VsfRadioProps } from './types';

export default function VsfRadio({
  id,
  name,
  label,
  value,
  disabled,
  alignment,
  required,
  helpText,
  className,
  onChange,
}: VsfRadioProps) {
  return (
    <div
      className={classNames(
        'vsf-radio',
        `vsf-radio--alignment-${alignment}`,
        { 'vsf-radio--disabled': disabled },
        className,
      )}
    >
      <div className="vsf-radio__input-wrapper">
        <input
          id={id}
          name={name}
          type="radio"
          value={value}
          className="vsf-radio__input"
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
      </div>
      <div className="vsf-radio__label-wrapper">
        <label htmlFor={id} className="vsf-radio__label">
          <div>{label}</div>
          {helpText ? (
            <span id={id} className="vsf-radio__help-text">
              {helpText}
            </span>
          ) : null}
        </label>
      </div>
    </div>
  );
}
