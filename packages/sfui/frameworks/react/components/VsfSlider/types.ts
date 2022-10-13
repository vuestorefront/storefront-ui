import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum ScrollbarDisplay {
  always = 'always',
  auto = 'auto',
}
export enum NavigationDisplay {
  block = 'block',
  floating = 'floating',
}

export type VsfSliderProps = PropsWithChildren &
  PropsWithStyle & {
    scrollbar?: ScrollbarDisplay;
    navigation?: NavigationDisplay;
    showMobileNavigation?: boolean;
    scrollSnap?: boolean;
  };
