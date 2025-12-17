import type { PropsWithChildren } from 'react';
import type { UseTooltipOptions, PropsWithStyle } from '@storefront-ui/react';

export interface SfTooltipProps extends UseTooltipOptions, PropsWithChildren, PropsWithStyle {
  id?: string;
  'data-testid'?: string;
  label: string;
  showArrow?: boolean;
  open?: boolean;
}
