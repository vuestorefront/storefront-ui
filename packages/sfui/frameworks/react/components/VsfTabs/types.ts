import type { ReactNode, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { VsfButtonSize } from '../VsfButton/types';
import type { PropsWithStyle } from '../../shared/types/index';

export interface VsfTabsProps extends PropsWithChildren, PropsWithStyle {
  active?: number | string | symbol;
  size?: `${VsfButtonSize}`;
  onChange?: (uid: number | string | symbol) => void;
}

export interface VsfTabsItemProps extends PropsWithChildren, PropsWithStyle {
  uid: number | string | symbol;
  disabled: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
}

export const VsfTabsContext = createContext<{ props: VsfTabsProps } | void>(undefined);
