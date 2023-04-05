export enum SfScrollableDirection {
  vertical = 'vertical',
  horizontal = 'horizontal',
};

export type SfScrollableOnDragChangeData = {
  isDragged: boolean;
};

export type SfScrollableOnScrollData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};

export type ScrollableOptions = {
  reduceMotion?: boolean;
  drag?: { sensitivity: number } | boolean;
  direction?: `${SfScrollableDirection}`;
  onDragChange?: (data: SfScrollableOnDragChangeData) => void; 
  onScroll?: (data: SfScrollableOnScrollData) => void;
  onPrev?: () => void;
  onNext?: () => void;
};
