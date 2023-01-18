import type { ReactNode, PropsWithChildren } from 'react';
import { VsfAlertType, VsfAlertVariant } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfAlertVariant, VsfAlertType };

export interface VsfAlertProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  header?: ReactNode | false;
  variant?: `${VsfAlertVariant}`;
  type?: `${VsfAlertType}`;
  text?: string;
  withShadow?: boolean;
  hidePrefix?: boolean;
  slotSuffix?: ReactNode | false;
  slotPrefix?: ReactNode | false;
  onOpenChange?: (value: boolean) => void;
}
