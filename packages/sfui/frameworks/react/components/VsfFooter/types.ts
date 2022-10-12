import { PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';

export enum VsfFooterSectionType {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
}
export enum VsfFooterLabelType {
  category = 'category',
  subcategory = 'subcategory',
  contact = 'contact',
  contactDescription = 'contact-description',
  socialMedia = 'social-media',
  bottomLinks = 'bottom-links',
  companyName = 'company-name',
}

export interface VsfFooterDefaultProps extends PropsWithChildren, PropsWithStyle {}
export interface VsfFooterSectionProps extends PropsWithChildren, PropsWithStyle {
  type?: VsfFooterSectionType;
}

export interface VsfFooterLabelProps extends PropsWithChildren, PropsWithStyle {
  type?: VsfFooterLabelType;
}
