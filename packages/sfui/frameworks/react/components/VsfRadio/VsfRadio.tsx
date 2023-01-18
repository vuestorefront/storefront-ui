import classNames from 'classnames';
import { VsfRadioAlignment, VsfRadioProps } from './types';

export default function VsfRadio({
  name,
  label,
  value,
  checked,
  disabled,
  alignment = VsfRadioAlignment.leading,
  required,
  helpText,
  className,
  onChange,
  ...attributes
}: VsfRadioProps) {
  return (
    <label
      className={classNames(
        'vsf-radio',
        `vsf-radio--alignment-${alignment}`,
        { 'vsf-radio--disabled': disabled },
        className,
      )}
      {...attributes}
    >
      <input
        name={name}
        type="radio"
        value={value}
        checked={checked}
        className="vsf-radio__input"
        disabled={disabled}
        required={required}
        onChange={onChange}
      />
      {label || helpText ? (
        <div className="vsf-radio__content-wrapper">
          <p>{label}</p>
          {helpText ? <p className="vsf-radio__help-text">{helpText}</p> : null}
        </div>
      ) : null}
    </label>
  );
}
