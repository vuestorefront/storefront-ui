import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfChipThumbnailSize {
  sm = 'sm',
  base = 'base',
}

export interface VsfChipThumbnailProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfChipThumbnailSize}`;
  color?: string;
}
