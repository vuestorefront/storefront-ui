import { SfBadgePlacement, SfBadgeVariant } from '@storefront-ui/shared';
import type { PropsWithStyle } from '@storefront-ui/react';

export { SfBadgePlacement, SfBadgeVariant };

export interface SfBadgeProps extends PropsWithStyle {
  content?: string | number;
  max?: number;
  placement?: `${SfBadgePlacement}`;
  variant?: `${SfBadgeVariant}`;
}
