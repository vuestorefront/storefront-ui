import classNames from 'classnames';
import type { SfFieldsetProps } from '@storefront-ui/react';

export default function SfFieldset({
  legend,
  invalid,
  hintText,
  errorText,
  legendClass,
  disabled,
  children,
  className,
  ...attributes
}: SfFieldsetProps): JSX.Element {
  return (
    <fieldset {...attributes}>
      {legend && (
        <legend
          className={classNames(
            'font-medium text-sm mb-0.5',
            disabled ? 'text-disabled-900' : 'text-neutral-900',
            legendClass,
          )}
        >
          {legend}
        </legend>
      )}
      {children}
      {invalid && !disabled && <p className="text-negative-700">{errorText}</p>}
      {hintText && (
        <p className={classNames('block text-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500')}>
          {hintText}
        </p>
      )}
    </fieldset>
  );
}
