import { PropsWithChildren } from 'react';
import { useFormControl } from './context';

// This component should notify the context to append `aria-describedby` when helper text is rendered
// How Chakra do this: https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/form-control/src/form-control.tsx#L126
// Useful note: https://stackoverflow.com/a/53404898
export default function SfFormHelperText(props: PropsWithChildren) {
  const { children } = props;
  const ctx = useFormControl();

  if (!ctx) throw new Error('Cannot read formControlContext.');

  return <p className="text-neutral-500 typography-hint-sm">{children}</p>;
}
