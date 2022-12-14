export enum VsfProductCardSizes {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}

export enum VsfProductCardLinkTags {
  a = 'a',
  NuxtLink = 'NuxtLink',
}
export interface VsfProductCardImageProps {
  imageSrc?: string;
  imageAttr?: Record<string, unknown>;
  vertical: boolean;
  size: VsfProductCardSizes;
}
export interface VsfProductCardProps {
  imageSrc?: string;
  imageAttr?: Record<string, unknown>;
  link: string;
  linkTag: VsfProductCardLinkTags;
  ratingValue?: number;
  maxRatingValue?: number;
  reviewsAmount?: number;
  title?: string;
  price?: string;
  oldPrice?: string;
  description?: string;
  outOfStock: boolean;
  inCart?: number;
  size: VsfProductCardSizes;
  addToCartLabel?: string;
  similarLabel?: string;
  badgeText?: string;
  vertical?: boolean;
}
