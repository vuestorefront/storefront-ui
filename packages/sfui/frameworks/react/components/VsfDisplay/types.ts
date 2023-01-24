import { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfDisplayDirection {
  horizontal = 'horizontal',
  horizontalReverse = 'horizontalReverse',
  vertical = 'vertical',
}

export interface VsfDisplayProps extends PropsWithStyle, PropsWithChildren {
  slotMedia?: ReactNode;
  direction?: `${VsfDisplayDirection}`;
}
