import type { ReactNode, PropsWithChildren } from 'react';
import { VsfAlertType, VsfAlertVariant } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfAlertVariant, VsfAlertType };

export interface VsfAlertProps extends PropsWithStyle, PropsWithChildren {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  header?: ReactNode;
  variant?: `${VsfAlertVariant}`;
  type?: `${VsfAlertType}`;
  text?: string;
  withShadow?: boolean;
  hidePrefix?: boolean;
  hideSuffix?: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  ariaLabelClose?: string;
}
