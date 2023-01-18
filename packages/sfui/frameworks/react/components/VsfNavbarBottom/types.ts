import type { ReactNode, MouseEventHandler, PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';
import type { VsfLinkProps } from '../VsfLink';

export interface VsfNavbarBottomProps extends PropsWithStyle, PropsWithChildren {
  absolute?: boolean;
  hideLabels?: boolean;
  filled?: boolean;
}

export interface VsfNavbarBottomItemProps extends PropsWithStyle {
  label: string;
  active?: boolean;
  link?: VsfLinkProps['link'];
  tag?: VsfLinkProps['tag'] | 'button';
  ariaLabel?: string;
  slotIcon: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
