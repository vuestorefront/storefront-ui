import type { Middleware } from '@floating-ui/react-dom';
import { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement } from '@storefront-ui/shared';

export { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement };

export interface UsePopoverOptions {
  isOpen?: boolean;
  placement?: `${SfPopoverPlacement}`;
  middleware?: Array<Middleware | null | undefined | false>;
  strategy?: `${SfPopoverStrategy}`;
}
