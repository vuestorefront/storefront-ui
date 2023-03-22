export type SfScrollableOptions = {
  reduceMotion?: boolean;
  snap?: boolean;
  drag?: { sensitivity: number };
  vertical?: boolean;
  onScroll?: (data: SfScrollableCallbackData) => void;
};

export type SfScrollableCallbackData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};
