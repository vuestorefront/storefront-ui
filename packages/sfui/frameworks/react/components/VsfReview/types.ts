import type { ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfReviewProps extends PropsWithStyle {
  title: string;
  content: string;
  date?: string;
  author?: string;
  charLimit?: number;
  showMoreText?: string;
  showLessText?: string;
  slotRating?: ReactNode;
  slotAuthorSuffix?: ReactNode;
  slotActions?: ReactNode;
}
