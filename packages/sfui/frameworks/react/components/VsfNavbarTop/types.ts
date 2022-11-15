import type { MouseEventHandler, PropsWithChildren, ElementType, ReactNode } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfNavbarTopDefaultProps extends PropsWithChildren, PropsWithStyle {}
export type VsfNavbarTopActionProps = PropsWithChildren &
  PropsWithStyle & {
    slotIcon?: ReactNode;
    tag?: ElementType;
    icon?: boolean;
    ariaLabel?: string;
    link?: string;
    active?: boolean;
    onClick?: MouseEventHandler;
  };

export interface VsfNavbarTopProps extends VsfNavbarTopDefaultProps {
  filled?: Boolean;
}

export interface VsfNavbarTopItemProps extends VsfNavbarTopProps {
  ariaLabel?: string;
  link?: string;
  onClick?: MouseEventHandler;
}
