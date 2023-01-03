import type { PropsWithChildren, ReactElement } from 'react';
import { VsfAlertTypes, VsfAlertVariants } from '@storefront-ui/shared/types/VsfAlert';
import type { PropsWithStyle } from '../../shared/types';

export * from '@storefront-ui/shared/types/VsfAlert';

export interface VsfAlertProps extends PropsWithChildren, PropsWithStyle {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  header?: string | ReactElement | false;
  variant?: VsfAlertVariants;
  type?: VsfAlertTypes;
  text?: string;
  withShadow?: boolean;
  hidePrefix?: boolean;
  suffix?: ReactElement | false;
  prefix?: ReactElement | false;
}
