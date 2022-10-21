export enum VsfSliderScrollbar {
  always = 'always',
  auto = 'auto',
}
export enum VsfSliderNavigation {
  block = 'block',
  floating = 'floating',
}

export type VsfSliderProps = {
  scrollbar?: VsfSliderScrollbar;
  navigation?: VsfSliderNavigation;
  showMobileNavigation?: boolean;
  scrollSnap?: boolean;
  draggable?: {
    sensitivity: number;
  };
};
