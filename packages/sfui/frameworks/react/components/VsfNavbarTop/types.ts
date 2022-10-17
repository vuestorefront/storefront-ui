import type { MouseEventHandler, ReactNode } from 'react';

export enum VsfNavbarTopVariants {
  branded = 'branded',
  primary = 'primary',
}

export enum VsfNavbarTopTypes {
  action = 'action',
  menu = 'menu',
}

export type VsfNavbarTopItemProps = {
  label?: string;
  slotIcon: ReactNode;
  ariaLabel?: string;
  variant: VsfNavbarTopVariants;
  type: VsfNavbarTopTypes;
  link?: string;
  onClick?: MouseEventHandler;
};

export interface VsfNavbarTopProps {
  className?: string;
  searchPlaceholder?: string;
  searchAutocomplete: string;
  searchValue: string;
  slotLogo: ReactNode;
  slotMenu: ReactNode;
  slotActions: ReactNode;
  slotMenuButton: ReactNode;
  slotSearch: ReactNode;
  variant: VsfNavbarTopVariants;
}
