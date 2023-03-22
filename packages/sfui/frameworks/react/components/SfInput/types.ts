import type { InputHTMLAttributes, ReactNode } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfInputSize } from '@storefront-ui/shared';

export { SfInputSize };
export interface SfInputProps extends PropsWithStyle, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: `${SfInputSize}`;
  invalid?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  wrapperClassName?: string;
}
