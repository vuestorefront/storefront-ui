import type { PropsWithChildren, ReactElement } from 'react';
import type { VsfIconSizeEnum } from '../VsfIconBase/types';

export interface VsfRatingButtonProps extends PropsWithChildren {
  size?: VsfRatingButtonSizes;
  max?: number;
  disabled?: boolean;
  onChange?: (event: number) => void;
  value?: number;
  ariaLabel?: string;
  name?: string;
  className?: string;
  renderIconFilled?: (size?: VsfIconSizeEnum) => ReactElement;
  renderIconEmpty?: (size?: VsfIconSizeEnum) => ReactElement;
}

export enum VsfRatingButtonSizes {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}
