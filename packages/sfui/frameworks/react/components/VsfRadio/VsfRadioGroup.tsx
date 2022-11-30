import classNames from 'classnames';
import type { VsfRadioGroupProps } from './types';

export default function VsfRadioGroup({
  id,
  legend,
  direction,
  required,
  invalid,
  errorText,
  helpText,
  requiredText,
  children,
  className,
}: VsfRadioGroupProps) {
  return (
    <fieldset
      id={id}
      className={classNames('vsf-radio-group', className)}
      aria-invalid={invalid}
      aria-required={required}
      aria-describedby="radioGroupErrorText"
      data-testid="radio-group"
    >
      {legend ? (
        <legend className="vsf-radio-group__legend" data-testid="radio-group-legend">
          {legend}
        </legend>
      ) : null}
      <div className={classNames('vsf-radio-group__list', `vsf-radio-group__list--${direction}`)}>{children}</div>
      {invalid && errorText ? (
        <p id="radioGroupErrorText" className="vsf-radio-group__error-text" data-testid="radio-group-error-text">
          {errorText}
        </p>
      ) : null}
      {helpText ? (
        <p id="radioGroupErrorText" className="vsf-radio-group__help-text" data-testid="radio-group-help-text">
          {helpText}
        </p>
      ) : null}
      {requiredText ? (
        <p className="vsf-radio-group__required-text" data-testid="radio-group-required-text">
          {requiredText}
        </p>
      ) : null}
    </fieldset>
  );
}
