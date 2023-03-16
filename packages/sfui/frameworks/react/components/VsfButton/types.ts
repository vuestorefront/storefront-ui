import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { VsfButtonSize, VsfButtonVariant } from '@storefront-ui/shared';

export { VsfButtonSize, VsfButtonVariant };

export interface VsfButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithStyle,
    PropsWithChildren {
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: `${VsfButtonSize}`;
  variant?: `${VsfButtonVariant}`;
  square?: boolean;
}
