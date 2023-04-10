import {
  Scrollable,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  type ScrollableOptions,
  type Prettify,
  type SfScrollableOnDragChangeData,
  type SfScrollableOnScrollData,
  type SfScrollableOnPrevData,
  type SfScrollableOnNextData,
} from '@storefront-ui/shared';

export type UseScrollableOptions = Prettify<
  ScrollableOptions & {
    activeIndex?: number;
  }
>;

export {
  type ScrollableOptions,
  type SfScrollableOnDragChangeData,
  type SfScrollableOnScrollData,
  type SfScrollableOnPrevData,
  type SfScrollableOnNextData,
  Scrollable,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
};
