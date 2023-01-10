import type { ReactNode, PropsWithChildren } from 'react';
import { VsfAlertTypes, VsfAlertVariants } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfAlertVariants, VsfAlertTypes };

export interface VsfAlertProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  header?: ReactNode | false;
  variant?: VsfAlertVariants;
  type?: VsfAlertTypes;
  text?: string;
  withShadow?: boolean;
  hidePrefix?: boolean;
  slotSuffix?: ReactNode | false;
  slotPrefix?: ReactNode | false;
}
