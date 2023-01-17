export type VsfSliderOptions = {
  reduceMotion?: boolean;
  snap?: boolean;
  drag?: { sensitivity: number };
  vertical?: boolean;
  onScroll?: (data: VsfSliderCallbackData) => void;
};

export type VsfSliderCallbackData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};
