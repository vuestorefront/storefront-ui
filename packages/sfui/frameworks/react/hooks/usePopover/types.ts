import type { Middleware } from '@floating-ui/react-dom';
import { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement } from '@storefront-ui/shared';

export { type SfPopoverBasePlacement, SfPopoverPlacement, SfPopoverStrategy };

export interface UsePopoverOptions {
  isOpen?: boolean;
  placement?: `${SfPopoverPlacement}`;
  middleware?: (Middleware | null | undefined | false)[];
  strategy?: `${SfPopoverStrategy}`;
}
