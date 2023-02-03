export type VsfScrollableOptions = {
  reduceMotion?: boolean;
  snap?: boolean;
  drag?: { sensitivity: number };
  vertical?: boolean;
  onScroll?: (data: VsfScrollableCallbackData) => void;
};

export type VsfScrollableCallbackData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};
