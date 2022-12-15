import { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfPaginationProps extends PropsWithStyle, PropsWithChildren {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  ariaLabel?: string;
  handlePageUpdate?: (event: number) => void;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  children?: ReactNode;
}
