import type { ReactNode } from 'react';

export interface VsfReviewProps {
  title: string;
  content: string;
  date?: string;
  author?: string;
  className?: string;
  charLimit?: number;
  showMoreText?: string;
  showLessText?: string;
  slotRating?: ReactNode;
  slotAuthorSuffix?: ReactNode;
  slotActions?: ReactNode;
}
