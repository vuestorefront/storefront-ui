import type { InputHTMLAttributes } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';

export interface VsfCheckboxProps extends PropsWithStyle, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
