import type { ElementType, InputHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfCheckboxProps extends PropsWithStyle, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapperAs?: ElementType<any> | undefined;
  wrapperClassName?: string;
  'data-testid'?: string;
  indeterminate?: boolean;
}
