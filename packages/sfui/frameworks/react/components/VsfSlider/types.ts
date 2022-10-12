import type { PropsWithChildren } from 'react';

export enum ScrollbarDisplay {
  always = 'always',
  auto = 'auto',
}
export enum NavigationDisplay {
  block = 'block',
  floating = 'floating',
}

export type VsfSliderProps = PropsWithChildren & {
  scrollbar?: ScrollbarDisplay | boolean;
  navigation?: NavigationDisplay | boolean;
};
