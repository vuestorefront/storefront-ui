import type { PropsWithChildren } from 'react';
import type { UseTooltipOptions, PropsWithStyle } from '@storefront-ui/react';

export interface VsfTooltipProps extends UseTooltipOptions, PropsWithChildren, PropsWithStyle {
  label: string;
  showArrow?: boolean;
}
