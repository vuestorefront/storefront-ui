import { ReactNode, createContext } from 'react';
import type { PropsWithChildren } from 'react';
import { VsfButtonSizes } from '../VsfButton/types';
import type { PropsWithStyle } from '../../shared/types/index';

export interface VsfTabsProps extends PropsWithChildren, PropsWithStyle {
  active?: number | string | symbol;
  onChange?: (uid: number | string | symbol) => void;
  size?: VsfButtonSizes;
}

export interface VsfTabsItemProps extends PropsWithChildren, PropsWithStyle {
  uid: number | string | symbol;
  disabled: boolean;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
}

export const VsfTabsContext = createContext<{ props: VsfTabsProps } | void>(undefined);
