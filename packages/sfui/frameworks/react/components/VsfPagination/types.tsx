import type { ReactNode, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfPaginationProps extends PropsWithStyle, PropsWithChildren {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  ariaLabel?: string;
  prev?: string;
  next?: string;
  hideButtonLabels?: boolean;
  slotPrev?: ReactNode;
  slotNext?: ReactNode;
  children?: ReactNode;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  onPageUpdate?: (currectPage: number) => void;
}
