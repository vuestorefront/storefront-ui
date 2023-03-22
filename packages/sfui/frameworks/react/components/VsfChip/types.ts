import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfChipSize } from '@storefront-ui/shared';

export { VsfChipSize };
export interface VsfChipProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfChipSize}`;
  square?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
}
