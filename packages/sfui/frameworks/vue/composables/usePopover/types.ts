import type { Ref } from 'vue';
import type {
  UseFloatingOptions,
  ReferenceElement,
  FloatingElement,
  MaybeElement,
  MaybeReadonlyRef,
} from '@floating-ui/vue';
import { VsfPopoverPlacement, VsfPopoverStrategy, type VsfPopoverBasePlacement } from '@storefront-ui/shared';

export { VsfPopoverPlacement, VsfPopoverStrategy, type VsfPopoverBasePlacement };

export interface UsePopoverOptions<T extends ReferenceElement = ReferenceElement> {
  referenceRef?: Readonly<Ref<MaybeElement<T>>>;
  floatingRef?: Readonly<Ref<MaybeElement<FloatingElement>>>;
  isOpen?: UseFloatingOptions['open'];
  placement?: MaybeReadonlyRef<`${VsfPopoverPlacement}` | undefined>;
  middleware?: UseFloatingOptions['middleware'];
  strategy?: MaybeReadonlyRef<`${VsfPopoverStrategy}` | undefined>;
}
