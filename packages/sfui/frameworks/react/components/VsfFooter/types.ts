import type { ReactNode } from 'react';

export type VsfLinkType = {
  label: string;
  link: string;
  icon?: ReactNode;
};
export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};
export type VsfContactOptionsType = {
  label: string;
  link: string;
  details: string[];
  icon?: ReactNode;
};
export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[];
  tag?: string;
}
