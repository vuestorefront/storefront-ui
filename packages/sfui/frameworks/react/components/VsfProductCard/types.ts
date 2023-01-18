import type { ReactNode, MouseEventHandler } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfProductCardSize {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}
export interface VsfProductCardImageProps extends PropsWithStyle {
  imageSrc?: string;
  vertical: boolean;
  size: `${VsfProductCardSize}`;
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
  size: `${VsfProductCardSize}`;
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
  onAddToCartClick?: MouseEventHandler<HTMLButtonElement>;
  onAddToWishlistClick?: MouseEventHandler<HTMLButtonElement>;
  onSeeSimilarClick?: MouseEventHandler<HTMLButtonElement>;
  onReviewsClick?: MouseEventHandler<HTMLButtonElement>;
}
