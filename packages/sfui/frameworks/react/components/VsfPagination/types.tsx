import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfPaginationProps extends PropsWithStyle, PropsWithChildren {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  ariaLabel?: string;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onPageUpdate?: (currectPage: number) => void;
}
