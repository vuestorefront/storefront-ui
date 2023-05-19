import { SfBadgePlacement, SfBadgeVariant } from '@storefront-ui/shared';
import { PropsWithStyle } from 'shared';

export { SfBadgePlacement, SfBadgeVariant };

export interface SfBadgeProps extends PropsWithStyle {
  content?: string | number;
  max?: number;
  placement?: `${SfBadgePlacement}`;
  variant?: `${SfBadgeVariant}`;
}
