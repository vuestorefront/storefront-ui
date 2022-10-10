import type { ReactNode, CSSProperties } from 'react';

export type VsfBadgeProps = {
  dot?: boolean;
  value?: string | number;
  invisible?: boolean;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};
