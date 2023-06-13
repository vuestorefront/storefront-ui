import {
  Scrollable,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  type ScrollableOptions,
  type Prettify,
  type SfScrollableOnDragStartData,
  type SfScrollableOnDragEndData,
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
  Scrollable,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  type ScrollableOptions,
  type Prettify,
  type SfScrollableOnDragStartData,
  type SfScrollableOnDragEndData,
  type SfScrollableOnScrollData,
  type SfScrollableOnPrevData,
  type SfScrollableOnNextData,
};
