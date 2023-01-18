import classNames from 'classnames';
import { VsfRadioGroupDirections, VsfRadioGroupProps } from './types';

export default function VsfRadioGroup({
  legend,
  direction = VsfRadioGroupDirections.vertical,
  required,
  invalid,
  errorText,
  helpText,
  requiredText,
  children,
  className,
  ...attributes
}: VsfRadioGroupProps) {
  return (
    <fieldset
      className={classNames('vsf-radio-group', className)}
      aria-invalid={invalid}
      aria-describedby="radioGroupErrorText"
      aria-required={required}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="radiogroup"
      data-testid="radio-group"
      {...attributes}
    >
      {legend ? (
        <legend className="vsf-radio-group__legend" data-testid="radio-group-legend">
          {legend}
        </legend>
      ) : null}
      <div className={classNames('vsf-radio-group__list', `vsf-radio-group__list--${direction}`)}>{children}</div>
      {invalid && errorText ? (
        <p id="radioGroupErrorText" className="vsf-radio-group__error-text" data-testid="radio-group-error">
          {errorText}
        </p>
      ) : null}
      {helpText ? (
        <p id="radioGroupErrorText" className="vsf-radio-group__help-text" data-testid="radio-group-help">
          {helpText}
        </p>
      ) : null}
      {required && requiredText ? (
        <p className="vsf-radio-group__required-text" data-testid="radio-group-required">
          *{requiredText}
        </p>
      ) : null}
    </fieldset>
  );
}
