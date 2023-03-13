import type { PropsWithChildren, ReactNode } from 'react';

export enum VsfSelectSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfSelectProps extends PropsWithChildren, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: `${VsfSelectSize}`;
  invalid?: boolean;
  wrapperClassName?: string;
  slotChevron?: ReactNode;
}
