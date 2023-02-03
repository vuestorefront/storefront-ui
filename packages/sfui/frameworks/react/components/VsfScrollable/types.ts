import type { PropsWithChildren, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfScrollableScrollbar {
  hidden = 'hidden',
  always = 'always',
  auto = 'auto',
}

export enum VsfScrollableNavigation {
  none = 'none',
  block = 'block',
  floating = 'floating',
}

export enum VsfScrollableDirection {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export interface VsfScrollableProps extends PropsWithChildren, PropsWithStyle {
  scrollbar?: `${VsfScrollableScrollbar}`;
  navigation?: `${VsfScrollableNavigation}`;
  direction?: `${VsfScrollableDirection}`;
  scrollSnap?: boolean;
  draggable?: {
    sensitivity: number;
  };
  slotPrevButton?: (arg: { onClick: () => void; hasPrev: boolean }) => ReactNode;
  slotNextButton?: (arg: { onClick: () => void; hasNext: boolean }) => ReactNode;
  ariaLabelPrev?: string;
  ariaLabelNext?: string;
  role?: string;
}
