export enum VsfCardSize {
  sm = 'sm',
  base = 'base',
  responsive = 'responsive',
}

export enum VsfCardLinkTags {
  a = 'a',
  Link = 'Link',
}

export interface VsfCardProps {
  title: string;
  size?: `${VsfCardSize}`;
  link?: string | Record<string, unknown>;
  linkTag?: VsfCardLinkTags;
  imgSrc?: string;
  imgAttr?: Record<string, unknown>;
  description?: string;
  buttonText?: string;
  rounded?: boolean;
}
