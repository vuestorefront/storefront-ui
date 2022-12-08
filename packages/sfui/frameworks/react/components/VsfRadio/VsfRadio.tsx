import classNames from 'classnames';
import { VsfRadioAlignments, VsfRadioProps } from './types';

export default function VsfRadio({
  id,
  name,
  label,
  value,
  disabled,
  alignment = VsfRadioAlignments.leading,
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
          <p>{label}</p>
          {helpText ? (
            <p id={id} className="vsf-radio__help-text">
              {helpText}
            </p>
          ) : null}
        </label>
      </div>
    </div>
  );
}
