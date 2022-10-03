import type { PropsWithChildren, CSSProperties, MouseEventHandler, ComponentType, ElementType } from 'react';
import { VsfIconProps } from '../VsfIcons/types';

type PropsWithStyle<P = unknown> = P & {
  className?: string | undefined;
  style?: CSSProperties;
};

export type VsfNavbarBottomProps = PropsWithStyle<
  PropsWithChildren<{
    absolute?: boolean;
    hideLabels?: boolean;
    filled?: boolean; // colored background
  }>
>;

export type VsfNavbarBottomItemProps = PropsWithStyle<{
  icon: ComponentType<VsfIconProps>;
  label: string;
  active?: boolean;
  badge?: string | number;
  dotBadge?: boolean;
  // VsfButton shared props
  link?: string;
  onClick?: MouseEventHandler;
  tag?: ElementType;
}>;
