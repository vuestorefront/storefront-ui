import type { UseFloatingProps } from '@floating-ui/react-dom';
import { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement } from '@storefront-ui/shared';

export { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement };

export interface UsePopoverOptions {
  isOpen?: boolean;
  placement?: `${SfPopoverPlacement}`;
  middleware?: UseFloatingProps['middleware'];
  strategy?: `${SfPopoverStrategy}`;
}
