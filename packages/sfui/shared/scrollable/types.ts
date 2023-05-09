export enum SfScrollableDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum SfScrollableButtonsPlacement {
  none = 'none',
  floating = 'floating',
  block = 'block',
}

export type SfScrollableOnDragStartData = {
  isDragged: boolean;
};

export type SfScrollableOnDragEndData = SfScrollableOnDragStartData & {
  swipeLeft: boolean;
  swipeRight: boolean;
};

export type SfScrollableOnScrollData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export type SfScrollableOnPrevData = {
  preventDefault: () => void;
};
export type SfScrollableOnNextData = SfScrollableOnPrevData;

export type ScrollableOptions = {
  reduceMotion?: boolean;
  drag?: { sensitivity?: number; containerWidth?: boolean } | boolean;
  direction?: `${SfScrollableDirection}`;
  isActiveIndexCentered?: boolean;
  onDragStart?: (data: SfScrollableOnDragStartData) => void;
  onDragEnd?: (data: SfScrollableOnDragEndData) => void;
  onScroll?: (data: SfScrollableOnScrollData) => void;
  onPrev?: (data: SfScrollableOnPrevData) => void;
  onNext?: (data: SfScrollableOnNextData) => void;
}; 
