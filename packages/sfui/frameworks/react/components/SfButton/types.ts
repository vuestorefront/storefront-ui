import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '@storefront-ui/react';
import { SfButtonSize, SfButtonVariant } from '@storefront-ui/shared';

export { SfButtonSize, SfButtonVariant };

export interface SfButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithStyle,
    PropsWithChildren {
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  size?: `${SfButtonSize}`;
  variant?: `${SfButtonVariant}`;
  square?: boolean;
}
