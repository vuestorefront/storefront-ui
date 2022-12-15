import type { ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfProductCardSizes {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}
export interface VsfProductCardImageProps {
  imageSrc?: string;
  vertical: boolean;
  size: VsfProductCardSizes;
  className?: string;
}
export interface VsfProductCardProps extends PropsWithStyle {
  imageSrc?: string;
  imageAttr?: Record<string, unknown>;
  link: string;
  ratingValue?: number;
  maxRatingValue?: number;
  reviewsAmount?: number;
  title?: string;
  price?: string;
  oldPrice?: string;
  description?: string;
  outOfStock: boolean;
  inCart?: string;
  size: VsfProductCardSizes;
  addToCartLabel?: string;
  similarLabel?: string;
  outOfStockLabel?: string;
  badgeText?: string;
  vertical: boolean;
  ariaLabelAddToWishlist: string;
  ariaLabelBadge: string;
  ariaLabelAddToBasket: string;
  slotImageBottom?: ReactNode;
  slotImageTop?: ReactNode;
  slotRating?: ReactNode;
  slotImage?: ReactNode;
  slotTitle?: ReactNode;
  onAddToCartClick?: (e?: Event) => void;
  onAddToWishlistClick?: (e?: Event) => void;
  onSeeSimilarClick?: (e?: Event) => void;
  onReviewsClick?: (e?: Event) => void;
}
