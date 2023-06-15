import { type ReactNode } from 'react';
import { type PropsWithStyle } from '@storefront-ui/react';
import { SfIconSize, SfRatingButtonSize } from '@storefront-ui/shared';

export { SfRatingButtonSize };

export interface SfRatingButtonRenderProps {
  isFilled: boolean;
  max: number;
  iconSize: Extract<`${SfIconSize}`, 'base' | 'lg' | 'xl'>;
}

export interface SfRatingButtonProps extends PropsWithStyle {
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  name?: string;
  disabled?: boolean;
  className?: string;
  size?: `${SfRatingButtonSize}`;
  getLabelText?: (value: number) => string;
  children?: (state: SfRatingButtonRenderProps) => ReactNode;
}
