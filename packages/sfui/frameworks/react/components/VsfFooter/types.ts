import type { ReactNode } from 'react';

export type VsfLinkType = {
  label: string;
  link: string;
};
export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};
export type VsfContactOptionsType = {
  label: string;
  link: string;
  details: string[];
};
export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[];
  helpIcon?: ReactNode;
  chatIcon?: ReactNode;
  contactIcon?: ReactNode;
  facebookIcon?: ReactNode;
  twitterIcon?: ReactNode;
  pinterestIcon?: ReactNode;
  youtubeIcon?: ReactNode;
  instagramIcon?: ReactNode;
}
