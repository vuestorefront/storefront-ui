import { type ScrollableOptions, Scrollable, SfScrollableDirection, type Prettify } from '@storefront-ui/shared';

export type UseScrollableOptions = Prettify<
  ScrollableOptions & {
    activeIndex?: number;
  }
>;

export { type ScrollableOptions, Scrollable, SfScrollableDirection };
