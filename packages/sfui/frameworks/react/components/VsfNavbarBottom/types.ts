import type { ReactNode } from 'react';
import type { VsfButtonProps } from '../VsfButton';
import type { PropsWithStyle } from '../../shared/types';

export type VsfNavbarBottomProps = PropsWithStyle & {
  absolute?: boolean;
  hideLabels?: boolean;
  filled?: boolean;
  children?: ReactNode;
};

type ButtonAttrs = Pick<VsfButtonProps<HTMLButtonElement | HTMLAnchorElement>, 'link' | 'onClick'>;
export interface VsfNavbarBottomItemProps extends PropsWithStyle, ButtonAttrs {
  label: string;
  slotIcon: ReactNode;
  active?: boolean;
  ariaLabel?: string;
}
