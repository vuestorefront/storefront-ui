import type { ElementType, InputHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface SfCheckboxProps extends PropsWithStyle, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  wrapperAs?: ElementType<any> | undefined;
  wrapperClassName?: string;
  indeterminate?: boolean;
}
