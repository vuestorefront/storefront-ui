import type { PropsWithChildren, ReactElement } from 'react';
import type { VsfIconSize } from '../VsfIconBase/types';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfRatingButtonSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfRatingButtonProps extends PropsWithChildren, PropsWithStyle {
  size?: `${VsfRatingButtonSize}`;
  max?: number;
  disabled?: boolean;
  value?: number;
  ariaLabel?: string;
  name?: string;
  renderIconFilled?: (size?: VsfIconSize) => ReactElement;
  renderIconEmpty?: (size?: VsfIconSize) => ReactElement;
  onChange?: (event: number) => void;
}
