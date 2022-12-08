import type { PropsWithChildren, ReactElement } from 'react';
import type { VsfIconSizeEnum } from '../VsfIconBase/types';

export interface VsfRatingButtonProps {
  size?: VsfRatingButtonSizes;
  max?: number;
  disabled?: boolean;
  onChange?: (event: number) => void;
  value?: number;
  ariaLabel?: string;
  name?: string;
  children?: PropsWithChildren;
  className?: string;
  renderIconFilled?: (size?: VsfIconSizeEnum) => ReactElement;
  renderIconEmpty?: (size?: VsfIconSizeEnum) => ReactElement;
}

export enum VsfRatingButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
