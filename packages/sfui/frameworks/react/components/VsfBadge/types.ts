import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfBadgeProps extends PropsWithStyle, PropsWithChildren {
  dot?: boolean;
  value?: string | number;
  invisible?: boolean;
  bordered?: boolean;
}
