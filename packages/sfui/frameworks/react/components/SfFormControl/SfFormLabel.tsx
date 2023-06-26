import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useFormControl } from './context';

export default function SfFormLabel(props: PropsWithChildren) {
  const { children } = props;
  const ctx = useFormControl();

  if (!ctx) throw new Error('Cannot read formControlContext.');

  return (
    // This component main goal is to pass `htmlFor` attribute
    <label
      htmlFor={ctx.fieldId}
      className={classNames('typography-label', {
        'text-disabled-500': ctx.disabled,
      })}
    >
      {children}
    </label>
  );
}
