import { PropsWithChildren } from 'react';
import { useFormControl } from './context';

export default function SfFormError(props: PropsWithChildren) {
  const { children } = props;
  const ctx = useFormControl();

  if (!ctx) throw new Error('Cannot read formControlContext.');

  // Get `invalid` state of the whole filed and display an error.
  return ctx.invalid ? <p className="text-negative-700 typography-error-sm">{children}</p> : null;
}
