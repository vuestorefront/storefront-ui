/* eslint-disable react/require-default-props */
import { PropsWithChildren, useId, useMemo } from 'react';
import { formControlContext } from './context';

interface SfFormControlProps {
  id?: string;
  invalid?: boolean;
  disabled?: boolean;
}

export default function SfFormControl(props: PropsWithChildren<SfFormControlProps>) {
  const { invalid = false, disabled = false, id } = props;
  const defaultId = useId();
  const fieldId = id || defaultId;

  // Provide all props as a context value.
  const value = useMemo(() => ({ invalid, disabled, fieldId }), [invalid, disabled, fieldId]);

  return <formControlContext.Provider {...props} value={value} />;
}
