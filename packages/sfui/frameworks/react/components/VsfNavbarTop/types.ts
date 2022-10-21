import type { MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';

export interface VsfNavbarTopProps extends PropsWithChildren, PropsWithStyle {
  filled: Boolean;
}

export interface VsfNavbarTopListItemProps extends PropsWithChildren, PropsWithStyle {}
export interface VsfNavbarTopLogoProps extends VsfNavbarTopListItemProps {}
export interface VsfNavbarTopNavigationProps extends VsfNavbarTopListItemProps {}
export interface VsfNavbarTopMenuProps extends VsfNavbarTopListItemProps {}
export interface VsfNavbarTopSearchProps extends VsfNavbarTopListItemProps {}
export interface VsfNavbarTopActionsProps extends VsfNavbarTopListItemProps {}

export interface VsfNavbarTopItemProps extends VsfNavbarTopProps {
  ariaLabel?: string;
  link?: string;
  [key: string]: unknown;
  onClick?: MouseEventHandler;
}
