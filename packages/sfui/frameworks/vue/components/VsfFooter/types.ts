export { VsfFooterColumnType, VsfFooterLabelType } from '@storefront-ui/shared';
import type { TagOrComponent } from '../../shared/types';

export type VsfLinkType = {
  label: string;
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};
export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};
export type VsfContactOptionsType = {
  label: string;
  details: string[];
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
  iconName?: string;
};
export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[];
}
