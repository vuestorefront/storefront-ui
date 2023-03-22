import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfChipSize } from '@storefront-ui/shared';

export { SfChipSize };
export interface SfChipProps extends PropsWithChildren, PropsWithStyle {
  size?: `${SfChipSize}`;
  square?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
}
