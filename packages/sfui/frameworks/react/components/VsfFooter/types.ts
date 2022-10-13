import { PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';
import { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@sfui/types/_components';

export interface VsfFooterColumnProps extends PropsWithChildren, PropsWithStyle {
  type?: VsfFooterColumnType;
}
export interface VsfFooterSectionProps extends PropsWithChildren, PropsWithStyle {
  type?: VsfFooterSectionType;
}

export interface VsfFooterLabelProps extends PropsWithChildren, PropsWithStyle {
  type?: VsfFooterLabelType;
}
