import type { InputHTMLAttributes, ReactNode } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfInputSize } from '@storefront-ui/shared';

export { VsfInputSize };
export interface VsfInputProps extends PropsWithStyle, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: `${VsfInputSize}`;
  invalid?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  wrapperClassName?: string;
}
