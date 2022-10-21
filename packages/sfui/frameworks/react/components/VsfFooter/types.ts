import { PropsWithChildren } from 'react';
import { PropsWithStyle, VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@sfui/sfui/shared/types';

export interface VsfFooterDefaultProps extends PropsWithChildren, PropsWithStyle {}

export interface VsfFooterColumnProps extends VsfFooterDefaultProps {
  type?: VsfFooterColumnType;
}
export interface VsfFooterSectionProps extends VsfFooterDefaultProps {
  type?: VsfFooterSectionType;
}

export interface VsfFooterLabelProps extends VsfFooterDefaultProps {
  type?: VsfFooterLabelType;
}
