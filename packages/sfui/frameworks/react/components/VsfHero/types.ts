import { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfHeroDirection {
  horizontal = 'horizontal',
  horizontalReverse = 'horizontalReverse',
}

export interface VsfHeroProps extends PropsWithStyle, PropsWithChildren {
  slotMedia?: ReactNode;
  bgImgMobileSrc?: string;
  bgImgDesktopSrc?: string;
  direction?: `${VsfHeroDirection}`;
}
