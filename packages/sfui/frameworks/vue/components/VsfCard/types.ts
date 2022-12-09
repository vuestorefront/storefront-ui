export enum VsfCardSizes {
  sm = 'sm',
  base = 'base',
}

export enum VsfCardLinkTags {
  a = 'a',
  Link = 'Link',
}
export interface VsfCardProps {
  title: string;
  size?: VsfCardSizes;
  link?: string | Record<string, unknown>;
  linkTag?: VsfCardLinkTags;
  imgSrc?: string;
  imgAttr?: Record<string, unknown>;
  description?: string;
  buttonText?: string;
  rounded?: boolean;
}
