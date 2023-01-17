import type { PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfSliderScrollbar {
  hidden = 'hidden',
  always = 'always',
  auto = 'auto',
}

export enum VsfSliderNavigation {
  none = 'none',
  block = 'block',
  floating = 'floating',
}

export enum VsfSliderDirection {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export type VsfSliderProps = PropsWithChildren &
  PropsWithStyle & {
    scrollbar?: VsfSliderScrollbar;
    navigation?: VsfSliderNavigation;
    direction?: VsfSliderDirection;
    scrollSnap?: boolean;
    draggable?: {
      sensitivity: number;
    };
    slotPrevButton?: (arg: { onClick: () => void; hasPrev: boolean }) => ReactNode;
    slotNextButton?: (arg: { onClick: () => void; hasNext: boolean }) => ReactNode;
    role?: string;
  };
