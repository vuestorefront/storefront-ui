import type { MouseEventHandler, PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';

export interface VsfNavbarTopDefaultProps extends PropsWithChildren, PropsWithStyle {}

export interface VsfNavbarTopProps extends VsfNavbarTopDefaultProps {
  filled: Boolean;
}

export interface VsfNavbarTopItemProps extends VsfNavbarTopProps {
  ariaLabel?: string;
  link?: string;
  [key: string]: unknown;
  onClick?: MouseEventHandler;
}
