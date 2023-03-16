import type { UseFloatingProps } from '@floating-ui/react-dom';
import { VsfPopoverPlacement, VsfPopoverStrategy, type VsfPopoverBasePlacement } from '@storefront-ui/shared';

export { VsfPopoverPlacement, VsfPopoverStrategy, type VsfPopoverBasePlacement };

export interface UsePopoverOptions {
  isOpen?: boolean;
  placement?: `${VsfPopoverPlacement}`;
  middleware?: UseFloatingProps['middleware'];
  strategy?: `${VsfPopoverStrategy}`;
}
