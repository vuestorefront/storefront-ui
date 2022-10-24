export type Options = {
  reduceMotion: boolean;
  snap: boolean;
  drag?: { sensitivity: number };
  onScroll?: (data: VSFSliderData) => void;
};

export type VSFSliderData = {
  left: number;
  width: number;
  scrollWidth: number;
  hasPrev: boolean;
  hasNext: boolean;
};
