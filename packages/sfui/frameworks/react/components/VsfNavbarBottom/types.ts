import type { ReactNode, MouseEventHandler } from 'react';
import type { PropsWithStyle } from '../../shared/types';
import type { VsfLinkProps } from '../VsfLink';

export type VsfNavbarBottomProps = PropsWithStyle & {
  absolute?: boolean;
  hideLabels?: boolean;
  filled?: boolean;
  children?: ReactNode;
};

export interface VsfNavbarBottomItemProps extends PropsWithStyle {
  label: string;
  slotIcon: ReactNode;
  active?: boolean;
  ariaLabel?: string;
  link?: VsfLinkProps['link'];
  tag?: VsfLinkProps['tag'] | 'button';
  onClick: MouseEventHandler<HTMLButtonElement>;
}
