import type { Ref } from 'vue';
import type {
  UseFloatingOptions,
  ReferenceElement,
  FloatingElement,
  MaybeElement,
  MaybeReadonlyRef,
} from '@floating-ui/vue';
import { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement } from '@storefront-ui/shared';

export { SfPopoverPlacement, SfPopoverStrategy, type SfPopoverBasePlacement };

export interface UsePopoverOptions<T extends ReferenceElement = ReferenceElement> {
  referenceRef?: Readonly<Ref<MaybeElement<T>>>;
  floatingRef?: Readonly<Ref<MaybeElement<FloatingElement>>>;
  isOpen?: UseFloatingOptions['open'];
  placement?: MaybeReadonlyRef<`${SfPopoverPlacement}` | undefined>;
  middleware?: UseFloatingOptions['middleware'];
  strategy?: MaybeReadonlyRef<`${SfPopoverStrategy}` | undefined>;
}
